package model;

import config.TipoUsuario;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Camada: model (Classes de Domínio / Entidades)
 *
 * Classe Professor (Subclasse de Usuario):
 * Regra de negócio do enunciado (centralizada em `TipoUsuario.PROFESSOR`):
 * - O Professor pode ter até 5 itens emprestados simultaneamente.
 */
public class Professor extends Usuario {

    public Professor(String nome) {
        super(nome);
    }

    /**
     * Implementação polimórfica do limite de itens para Professor: 5 itens.
     */
    @Override
    public int getLimiteItens() {
        return TipoUsuario.PROFESSOR.getLimiteItens();
    }

    @Override
    public String getTipoPerfil() {
        return TipoUsuario.PROFESSOR.getDescricao();
    }
}

