package model;

import config.TipoItem;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Camada: model (Classes de Domínio / Entidades)
 *
 * Classe DVD (Subclasse extra sugerida na Dica 10):
 * "10. Teste sua solução criando uma categoria nova (por exemplo, DVD) sem alterar
 *  nenhum método já escrito — se precisar alterar, revise onde a decisão de tipo vazou."
 *
 * Graças ao Polimorfismo e ao Princípio Aberto-Fechado (Open/Closed Principle - SOLID),
 * podemos adicionar a classe DVD com suas próprias regras (3 dias de prazo e
 * R$ 2,00 de multa por dia) e a classe Biblioteca na camada `service` funcionará
 * perfeitamente com ela sem alterar uma única linha sequer em Biblioteca ou ItemBiblioteca!
 */
public class DVD extends ItemBiblioteca {

    private int duracaoMinutos;

    public DVD(String codigo, String titulo, int duracaoMinutos) {
        super(codigo, titulo);
        this.duracaoMinutos = duracaoMinutos;
    }

    public DVD(String codigo, String titulo) {
        this(codigo, titulo, 120);
    }

    /**
     * Prazo específico para DVD: 3 dias.
     */
    @Override
    public int getPrazoDias() {
        return TipoItem.DVD.getPrazoDias();
    }

    /**
     * Multa específica para DVD: R$ 2,00 por dia de atraso.
     */
    @Override
    public double getMultaPorDia() {
        return TipoItem.DVD.getMultaPorDia();
    }

    @Override
    public String getTipoDescricao() {
        return TipoItem.DVD.getDescricao();
    }

    public int getDuracaoMinutos() {
        return duracaoMinutos;
    }

    @Override
    public String toString() {
        return super.toString() + " | Duração: " + duracaoMinutos + " min";
    }
}

