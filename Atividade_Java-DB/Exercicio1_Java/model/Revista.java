package model;

import config.TipoItem;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Camada: model (Classes de Domínio / Entidades)
 *
 * Classe Revista (Subclasse de ItemBiblioteca):
 * Regras específicas do enunciado para Revista (centralizadas em `TipoItem.REVISTA`):
 * - Prazo de empréstimo: 7 dias
 * - Multa por atraso: R$ 1,00 por dia
 *
 * CONCEITOS APLICADOS:
 * - Herança ('extends ItemBiblioteca'): reaproveita a estrutura base de um item do acervo.
 * - Polimorfismo ('@Override'): define o prazo mais curto (7 dias) e multa maior (R$ 1,00/dia).
 */
public class Revista extends ItemBiblioteca {

    // Atributo específico de Revista (alinhado também com o Exercício 2 do banco)
    private int edicao;

    /**
     * Construtor de Revista com número da edição.
     *
     * @param codigo Código único da revista (ex: "REV-001")
     * @param titulo Título da revista
     * @param edicao Número da edição
     */
    public Revista(String codigo, String titulo, int edicao) {
        super(codigo, titulo);
        this.edicao = edicao;
    }

    /**
     * Construtor simplificado (caso queira instanciar apenas com código e título).
     */
    public Revista(String codigo, String titulo) {
        this(codigo, titulo, 1);
    }

    /**
     * Implementação polimórfica do prazo da Revista: 7 dias.
     */
    @Override
    public int getPrazoDias() {
        return TipoItem.REVISTA.getPrazoDias();
    }

    /**
     * Implementação polimórfica da multa diária da Revista: R$ 1,00 por dia.
     */
    @Override
    public double getMultaPorDia() {
        return TipoItem.REVISTA.getMultaPorDia();
    }

    @Override
    public String getTipoDescricao() {
        return TipoItem.REVISTA.getDescricao();
    }

    public int getEdicao() {
        return edicao;
    }

    @Override
    public String toString() {
        return super.toString() + " | Edição: #" + edicao;
    }
}

