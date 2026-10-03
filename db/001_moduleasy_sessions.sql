CREATE TABLE IF NOT EXISTS moduleasy_sessions (
    session_id VARCHAR(128) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
    session_data MEDIUMBLOB NOT NULL,
    expires_at INT UNSIGNED NOT NULL,
    PRIMARY KEY (session_id),
    KEY idx_moduleasy_sessions_expires_at (expires_at)
) ENGINE=InnoDB;