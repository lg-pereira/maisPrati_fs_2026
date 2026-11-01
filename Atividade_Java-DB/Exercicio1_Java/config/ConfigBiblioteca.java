package config;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Camada: config (Enums e Configurações)
 *
 * Classe ConfigBiblioteca:
 * Centraliza os parâmetros gerais da biblioteca (como o tamanho padrão dos
 * arrays fixos de acervo e de usuários, nome da biblioteca, etc.).
 */
public final class ConfigBiblioteca {

    // Construtor privado para impedir instanciação (classe utilitária de constantes)
    private ConfigBiblioteca() {
    }

    public static final String NOME_BIBLIOTECA = "Biblioteca Comunitária do Bairro";

    // Tamanhos fixos padrão para os arrays da classe Biblioteca (Item 5 do enunciado)
    public static final int CAPACIDADE_PADRAO_ACERVO = 10;
    public static final int CAPACIDADE_PADRAO_USUARIOS = 5;
}

