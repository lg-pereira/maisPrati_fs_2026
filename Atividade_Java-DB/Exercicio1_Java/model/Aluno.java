package model;

import config.TipoUsuario;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Camada: model (Classes de Domínio / Entidades)
 *
 * Classe Aluno (Subclasse de Usuario):
 * Regra de negócio do enunciado (centralizada em `TipoUsuario.ALUNO`):
 * - O Aluno pode ter até 3 itens emprestados simultaneamente.
 */
public class Aluno extends Usuario {

    public Aluno(String nome) {
        super(nome);
    }

    /**
     * Implementação polimórfica do limite de itens para Aluno: 3 itens.
     */
    @Override
    public int getLimiteItens() {
        return TipoUsuario.ALUNO.getLimiteItens();
    }

    @Override
    public String getTipoPerfil() {
        return TipoUsuario.ALUNO.getDescricao();
    }
}

