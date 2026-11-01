package model;

import config.TipoItem;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Camada: model (Classes de Domínio / Entidades)
 *
 * Classe Livro (Subclasse de ItemBiblioteca):
 * Regras específicas do enunciado para Livro (centralizadas em `TipoItem.LIVRO`):
 * - Prazo de empréstimo: 14 dias
 * - Multa por atraso: R$ 0,50 por dia
 *
 * CONCEITOS APLICADOS:
 * - Herança ('extends ItemBiblioteca'): herda codigo, titulo, disponivel e métodos de controle.
 * - Polimorfismo ('@Override'): implementa os métodos abstratos com os valores específicos de Livro.
 */
public class Livro extends ItemBiblioteca {

    // Atributo específico de Livro (alinhado também com o Exercício 2 do banco)
    private String autor;

    /**
     * Construtor de Livro.
     * Repassa o código e o título para o construtor da superclasse (super)
     * e armazena o autor.
     *
     * @param codigo Código único do livro (ex: "LIV-001")
     * @param titulo Título do livro
     * @param autor  Nome do autor do livro
     */
    public Livro(String codigo, String titulo, String autor) {
        super(codigo, titulo);
        this.autor = autor;
    }

    /**
     * Construtor simplificado (caso queira instanciar apenas com código e título).
     */
    public Livro(String codigo, String titulo) {
        this(codigo, titulo, "Autor não informado");
    }

    /**
     * Implementação polimórfica do prazo do Livro: 14 dias.
     */
    @Override
    public int getPrazoDias() {
        return TipoItem.LIVRO.getPrazoDias();
    }

    /**
     * Implementação polimórfica da multa diária do Livro: R$ 0,50 por dia.
     */
    @Override
    public double getMultaPorDia() {
        return TipoItem.LIVRO.getMultaPorDia();
    }

    @Override
    public String getTipoDescricao() {
        return TipoItem.LIVRO.getDescricao();
    }

    public String getAutor() {
        return autor;
    }

    @Override
    public String toString() {
        return super.toString() + " | Autor: " + autor;
    }
}

