package model;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Camada: model (Classes de Domínio / Entidades)
 *
 * Classe abstrata Usuario:
 * Representa qualquer pessoa cadastrada na biblioteca que pode realizar empréstimos
 * (Aluno, Professor, etc.).
 *
 * CONCEITOS APLICADOS:
 * 1. Abstração: Define a estrutura comum (`nome`, `quantidadeEmprestada`) e exige
 *    que cada tipo de usuário informe seu próprio limite por meio do método abstrato
 *    `getLimiteItens()`.
 * 2. Encapsulamento: `quantidadeEmprestada` não possui um `setQuantidadeEmprestada()`
 *    livre. Ela só é incrementada ou decrementada por métodos de domínio controlados
 *    durante um empréstimo ou devolução.
 * 3. Polimorfismo: `podeEmprestar()` consulta `getLimiteItens()` sem precisar saber
 *    se o objeto em tempo de execução é um `Aluno` (limite 3) ou `Professor` (limite 5).
 */
public abstract class Usuario {

    private String nome;
    private int quantidadeEmprestada;

    /**
     * Construtor da classe abstrata Usuario.
     * Todo usuário inicia com 0 itens emprestados.
     *
     * @param nome Nome completo do usuário
     */
    public Usuario(String nome) {
        this.nome = nome;
        this.quantidadeEmprestada = 0;
    }

    // =========================================================================
    // MÉTODO ABSTRATO (Contrato Polimórfico)
    // =========================================================================

    /**
     * Retorna o limite máximo de itens simultâneos que este tipo de usuário pode ter.
     * - Aluno: 3 itens
     * - Professor: 5 itens
     *
     * @return Quantidade máxima de itens simultâneos
     */
    public abstract int getLimiteItens();

    /**
     * Retorna a descrição do perfil do usuário (ex: "ALUNO", "PROFESSOR").
     */
    public abstract String getTipoPerfil();

    // =========================================================================
    // MÉTODOS DE CONTROLE DE EMPRÉSTIMO
    // =========================================================================

    /**
     * Verifica de forma polimórfica se o usuário ainda pode pegar mais um item.
     *
     * @return true se a quantidade atual for menor que o limite permitido
     */
    public boolean podeEmprestar() {
        return this.quantidadeEmprestada < getLimiteItens();
    }

    /**
     * Incrementa a quantidade de itens em posse do usuário ao realizar um empréstimo.
     */
    public void registrarEmprestimo() {
        this.quantidadeEmprestada++;
    }

    /**
     * Decrementa a quantidade de itens em posse do usuário ao realizar uma devolução,
     * garantindo que nunca fique negativa.
     */
    public void registrarDevolucao() {
        if (this.quantidadeEmprestada > 0) {
            this.quantidadeEmprestada--;
        }
    }

    // =========================================================================
    // GETTERS E REPRESENTAÇÃO TEXTUAL
    // =========================================================================

    public String getNome() {
        return nome;
    }

    public int getQuantidadeEmprestada() {
        return quantidadeEmprestada;
    }

    @Override
    public String toString() {
        return String.format(
            "[%s] Nome: %-20s | Itens com o usuário: %d/%d",
            getTipoPerfil(), nome, quantidadeEmprestada, getLimiteItens()
        );
    }
}

