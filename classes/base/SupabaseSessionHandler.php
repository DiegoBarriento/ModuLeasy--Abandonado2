<?php
class SupabaseSessionHandler implements SessionHandlerInterface
{
    private SupabaseClient $supabase;

    public function __construct()
    {
        $this->supabase = new SupabaseClient();
    }

    public function open(string $path, string $name): bool
    {
        return true;
    }

    public function close(): bool
    {
        return true;
    }

    public function read(string $id): string|false
    {
        try {
            $agora = time();
            $recurso = "/moduleasy_sessions?session_id=eq." . urlencode($id) . "&expires_at=gt.{$agora}&select=session_data";
            $resposta = $this->supabase->request('GET', $recurso);

            if (!empty($resposta) && isset($resposta[0]['session_data'])) {
                return (string) $resposta[0]['session_data'];
            }
        } catch (Exception $e) {
            // Evita que erros de rede quebrem a aplicação serverless
        }
        return '';
    }

    public function write(string $id, string $data): bool
    {
        try {
            $expira = time() + (int) ini_get('session.gc_maxlifetime');
            $body = [
                'session_id'   => $id,
                'session_data' => $data,
                'expires_at'   => $expira
            ];

            // Cabeçalho que força o Supabase a atualizar se a chave primária (session_id) já existir
            $customHeaders = [
                'Prefer: resolution=merge-duplicates'
            ];

            $this->supabase->request('POST', '/moduleasy_sessions', $body, $customHeaders);
            return true;
        } catch (Exception $e) {
            return false;
        }
    }

    public function destroy(string $id): bool
    {
        try {
            $this->supabase->request('DELETE', "/moduleasy_sessions?session_id=eq." . urlencode($id));
            return true;
        } catch (Exception $e) {
            return false;
        }
    }

    public function gc(int $max_lifetime): int|false
    {
        try {
            $agora = time();
            $this->supabase->request('DELETE', "/moduleasy_sessions?expires_at=lte.{$agora}");
            return true;
        } catch (Exception $e) {
            return false;
        }
    }
}
?>
