package model;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Camada: model (Classes de Domínio / Entidades)
 *
 * Classe abstrata ItemBiblioteca:
 * Representa qualquer item do acervo da biblioteca (Livro, Revista, DVD, etc.).
 *
 * CONCEITOS APLICADOS:
 * 1. Abstração: Não faz sentido existir um "ItemBiblioteca" genérico no mundo real,
 *    apenas itens concretos (Livro, Revista). Por isso a classe é 'abstract'.
 * 2. Encapsulamento: Os atributos são privados ('private').
 *    ATENÇÃO À DICA 8: Não existe um método 'setDisponivel(boolean)' público!
 *    A disponibilidade só muda como consequência das operações de empréstimo e devolução
 *    através dos métodos de ação `marcarComoEmprestado()` e `marcarComoDevolvido()`.
 * 3. Polimorfismo (Dica 7): O prazo de entrega e o valor da multa diária variam de acordo
 *    com o tipo do item. Em vez de atributos fixos ou 'if/else' espalhados pelo código,
 *    declaramos 'getPrazoDias()' e 'getMultaPorDia()' como métodos abstratos.
 *    Cada subclasse é obrigada a informar sua própria regra.
 */
public abstract class ItemBiblioteca {

    // Atributos privados (encapsulados) comuns a qualquer item do acervo
    private String codigo;
    private String titulo;
    private boolean disponivel;

    /**
     * Construtor da classe abstrata.
     * Todo item recém-cadastrado na biblioteca começa como disponível (true).
     *
     * @param codigo Código identificador único do item (ex: "LIV-001", "REV-001")
     * @param titulo Título da obra ou publicação
     */
    public ItemBiblioteca(String codigo, String titulo) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.disponivel = true; // Por padrão, ao cadastrar no acervo, está disponível
    }

    // =========================================================================
    // MÉTODOS ABSTRATOS (Contrato para as subclasses - Polimorfismo)
    // =========================================================================

    /**
     * Define o prazo máximo (em dias) que o item pode ficar emprestado sem multa.
     * Como cada tipo de item tem um prazo diferente, as subclasses implementam este método.
     *
     * @return Quantidade de dias permitidos para empréstimo
     */
    public abstract int getPrazoDias();

    /**
     * Define o valor da multa (em R$) por cada dia de atraso na devolução.
     *
     * @return Valor da multa diária em reais
     */
    public abstract double getMultaPorDia();

    /**
     * Retorna uma descrição textual do tipo do item (ex: "LIVRO", "REVISTA", "DVD")
     * para enriquecer a listagem sem precisar de 'if/instanceof'.
     *
     * @return Nome da categoria/tipo do item
     */
    public abstract String getTipoDescricao();

    // =========================================================================
    // MÉTODOS DE COMPORTAMENTO (Regras de Negócio)
    // =========================================================================

    /**
     * Marca o item como emprestado (indisponível).
     * Nota (Dica 8): Não há um `setDisponivel(boolean)` livre! Este método expressa
     * a transição de estado exclusiva do fluxo `emprestar()` na camada `service`.
     */
    public void marcarComoEmprestado() {
        this.disponivel = false;
    }

    /**
     * Marca o item como devolvido (disponível novamente no acervo).
     * Nota (Dica 8): Expressa a transição de estado exclusiva do fluxo `devolver()`
     * na camada `service`.
     */
    public void marcarComoDevolvido() {
        this.disponivel = true;
    }

    /**
     * Calcula o valor da multa com base na quantidade total de dias em que o item
     * permaneceu emprestado.
     *
     * Observe o Template Method / Polimorfismo em ação:
     * Este método chama 'getPrazoDias()' e 'getMultaPorDia()' sem saber se 'this'
     * é um Livro, Revista ou DVD! O Java resolve em tempo de execução (late binding).
     *
     * @param diasEmprestado Quantidade total de dias que o usuário ficou com o item
     * @return Valor total da multa (0.0 se devolvido dentro do prazo)
     */
    public double calcularMulta(int diasEmprestado) {
        int diasAtraso = diasEmprestado - getPrazoDias();
        if (diasAtraso > 0) {
            return diasAtraso * getMultaPorDia();
        }
        return 0.0;
    }

    // =========================================================================
    // GETTERS E REPRESENTAÇÃO TEXTUAL
    // =========================================================================

    public String getCodigo() {
        return codigo;
    }

    public String getTitulo() {
        return titulo;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    /**
     * Sobrescrita do toString() para permitir que 'listarAcervo()' na classe Biblioteca
     * exiba todos os itens em um único laço sem nenhum 'if' verificando o tipo (Dica 9).
     */
    @Override
    public String toString() {
        String status = disponivel ? "Disponível" : "Emprestado";
        return String.format(
            "[%s] Código: %-8s | Título: %-30s | Prazo: %2d dias | Multa/dia: R$ %.2f | Status: %s",
            getTipoDescricao(), codigo, titulo, getPrazoDias(), getMultaPorDia(), status
        );
    }
}

