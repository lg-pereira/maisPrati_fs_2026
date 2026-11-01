package config;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Camada: config (Enums e Configurações)
 *
 * Enum TipoUsuario:
 * Centraliza as constantes de perfil de usuário e o limite máximo de itens
 * simultâneos permitidos pelo enunciado:
 * - ALUNO: até 3 itens simultâneos
 * - PROFESSOR: até 5 itens simultâneos
 */
public enum TipoUsuario {

    ALUNO("ALUNO    ", 3),
    PROFESSOR("PROFESSOR", 5);

    private final String descricao;
    private final int limiteItens;

    TipoUsuario(String descricao, int limiteItens) {
        this.descricao = descricao;
        this.limiteItens = limiteItens;
    }

    public String getDescricao() {
        return descricao;
    }

    public int getLimiteItens() {
        return limiteItens;
    }
}

