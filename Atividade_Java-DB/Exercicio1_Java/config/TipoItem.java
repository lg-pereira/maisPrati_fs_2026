package config;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Camada: config (Enums e Configurações)
 *
 * Enum TipoItem:
 * Centraliza as constantes das regras de negócio de cada categoria de item
 * (descrição formatada, prazo em dias e valor da multa por dia de atraso).
 *
 * As subclasses em `model` (Livro, Revista, DVD) continuam implementando os
 * métodos abstratos `getPrazoDias()` e `getMultaPorDia()` polimorficamente,
 * mas buscam os valores daqui para evitar "números mágicos" (magic numbers)
 * espalhados pelo código.
 */
public enum TipoItem {

    LIVRO("LIVRO  ", 14, 0.50),
    REVISTA("REVISTA", 7, 1.00),
    DVD("DVD    ", 3, 2.00);

    private final String descricao;
    private final int prazoDias;
    private final double multaPorDia;

    TipoItem(String descricao, int prazoDias, double multaPorDia) {
        this.descricao = descricao;
        this.prazoDias = prazoDias;
        this.multaPorDia = multaPorDia;
    }

    public String getDescricao() {
        return descricao;
    }

    public int getPrazoDias() {
        return prazoDias;
    }

    public double getMultaPorDia() {
        return multaPorDia;
    }
}

