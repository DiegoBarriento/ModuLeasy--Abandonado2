<?php
class SupabaseClient
{
    private string $baseUrl;
    private string $secretKey;

    public function __construct()
    {
        $url = getenv('SUPABASE_URL');
        $secretKey = getenv('SUPABASE_SECRET_KEY');

        if ($url === false || $url === '' || $secretKey === false || $secretKey === '') {
            throw new RuntimeException('Configure SUPABASE_URL e SUPABASE_SECRET_KEY no ambiente.');
        }

        if (!filter_var($url, FILTER_VALIDATE_URL) || strtolower((string) parse_url($url, PHP_URL_SCHEME)) !== 'https') {
            throw new RuntimeException('SUPABASE_URL deve ser uma URL HTTPS válida.');
        }

        if (!function_exists('curl_init')) {
            throw new RuntimeException('A extensão cURL do PHP é necessária para acessar o Supabase.');
        }

        $this->baseUrl = rtrim($url, '/');
        $this->secretKey = $secretKey;
    }

    // Adicionado o parâmetro ?array $customHeaders para permitir Upsert nativo
    public function request(string $method, string $resource, ?array $body = null, ?array $customHeaders = null): array
    {
        $method = strtoupper($method);
        if (!in_array($method, ['GET', 'POST', 'PATCH', 'DELETE'], true)) {
            throw new InvalidArgumentException('Método HTTP não suportado.');
        }

        if ($resource === '' || $resource[0] !== '/' || str_contains($resource, "\r") || str_contains($resource, "\n")) {
            throw new InvalidArgumentException('Recurso Supabase inválido.');
        }

        $headers = [
            'apikey: ' . $this->secretKey,
            'Accept: application/json',
        ];

        // Mescla cabeçalhos customizados se houver
        if ($customHeaders !== null) {
            $headers = array_merge($headers, $customHeaders);
        }

        $options = [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => $method,
            CURLOPT_HTTPHEADER => $headers,
            CURLOPT_CONNECTTIMEOUT => 5,
            CURLOPT_TIMEOUT => 15,
        ];

        if ($body !== null) {
            $payload = json_encode($body, JSON_THROW_ON_ERROR);
            $options[CURLOPT_POSTFIELDS] = $payload;
            $headers[] = 'Content-Type: application/json';
            $options[CURLOPT_HTTPHEADER] = $headers;
        }

        $curl = curl_init($this->baseUrl . '/rest/v1' . $resource);
        if ($curl === false) {
            throw new RuntimeException('Não foi possível iniciar a conexão com o Supabase.');
        }

        curl_setopt_array($curl, $options);
        $response = curl_exec($curl);
        $status = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
        $error = curl_error($curl);
        curl_close($curl);

        if ($response === false) {
            throw new RuntimeException('Falha de rede ao acessar o Supabase: ' . $error);
        }

        if ($status < 200 || $status >= 300) {
            throw new RuntimeException('O Supabase responded com HTTP ' . $status . '.');
        }

        if ($response === '') {
            return [];
        }

        $data = json_decode($response, true, 512, JSON_THROW_ON_ERROR);
        if (!is_array($data)) {
            throw new RuntimeException('O Supabase retornou uma resposta inesperada.');
        }

        return $data;
    }

    public function verificarBanco(): void
    {
        $this->request('GET', '/locador?select=nm_email_locador&limit=0');
    }
}
?>
