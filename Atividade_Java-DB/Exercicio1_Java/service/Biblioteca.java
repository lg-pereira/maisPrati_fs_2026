package service;

import config.ConfigBiblioteca;
import model.ItemBiblioteca;
import model.Usuario;

/**
 * EXERCÍCIO 1 — Sistema de Biblioteca em Java (POO)
 * Camada: service (Serviços / Regras de Negócio)
 *
 * Classe Biblioteca:
 * Gerencia o acervo de itens e o quadro de usuários utilizando arrays de tamanho fixo,
 * além de orquestrar as operações de:
 * - Cadastro de itens e usuários
 * - Empréstimo (`emprestar`)
 * - Devolução com cálculo automático de multa (`devolver`)
 * - Listagem polimórfica do acervo (`listarAcervo`)
 *
 * PONTOS DE REVISÃO IMPORTANTES (Dicas 8, 9 e 10):
 * 1. Usa arrays de tamanho fixo (`ItemBiblioteca[]` e `Usuario[]`) com contadores
 *    de ocupação (`totalItens` e `totalUsuarios`).
 * 2. Não utiliza `if (item instanceof Livro)` nem `if (usuario instanceof Aluno)` em
 *    nenhum lugar! Todas as decisões de prazo, multa e limite são resolvidas via
 *    polimorfismo (chamando métodos das classes abstratas da camada `model`).
 * 3. `listarAcervo()` percorre o array `acervo` em um único laço `for`, sem `if` de tipo.
 */
public class Biblioteca {

    // Arrays de tamanho fixo conforme exigido no item 5 do enunciado
    private ItemBiblioteca[] acervo;
    private int totalItens;

    private Usuario[] usuarios;
    private int totalUsuarios;

    /**
     * Construtor padrão utilizando as capacidades definidas em `ConfigBiblioteca`.
     */
    public Biblioteca() {
        this(
            ConfigBiblioteca.CAPACIDADE_PADRAO_ACERVO,
            ConfigBiblioteca.CAPACIDADE_PADRAO_USUARIOS
        );
    }

    /**
     * Construtor da Biblioteca definindo a capacidade máxima dos arrays fixos.
     *
     * @param capacidadeAcervo   Quantidade máxima de itens que a biblioteca comporta
     * @param capacidadeUsuarios Quantidade máxima de usuários que a biblioteca comporta
     */
    public Biblioteca(int capacidadeAcervo, int capacidadeUsuarios) {
        this.acervo = new ItemBiblioteca[capacidadeAcervo];
        this.totalItens = 0;

        this.usuarios = new Usuario[capacidadeUsuarios];
        this.totalUsuarios = 0;
    }

    // =========================================================================
    // MÉTODOS DE CADASTRO EM ARRAYS DE TAMANHO FIXO
    // =========================================================================

    /**
     * Adiciona um novo item (Livro, Revista, DVD, etc.) ao array do acervo.
     *
     * @param item Objeto polimórfico do tipo ItemBiblioteca
     * @return true se cadastrado com sucesso, false se o array estiver cheio
     */
    public boolean cadastrarItem(ItemBiblioteca item) {
        if (totalItens >= acervo.length) {
            System.out.println("❌ [ERRO] Capacidade máxima do acervo atingida! Não foi possível cadastrar: " + item.getTitulo());
            return false;
        }
        acervo[totalItens] = item;
        totalItens++;
        System.out.println("✅ Item cadastrado: [" + item.getCodigo() + "] " + item.getTitulo());
        return true;
    }

    /**
     * Adiciona um novo usuário (Aluno, Professor, etc.) ao array de usuários.
     *
     * @param usuario Objeto polimórfico do tipo Usuario
     * @return true se cadastrado com sucesso, false se o array estiver cheio
     */
    public boolean cadastrarUsuario(Usuario usuario) {
        if (totalUsuarios >= usuarios.length) {
            System.out.println("❌ [ERRO] Capacidade máxima de usuários atingida! Não foi possível cadastrar: " + usuario.getNome());
            return false;
        }
        usuarios[totalUsuarios] = usuario;
        totalUsuarios++;
        System.out.println("👤 Usuário cadastrado: " + usuario.getNome() + " (Limite: " + usuario.getLimiteItens() + " itens)");
        return true;
    }

    // =========================================================================
    // OPERAÇÕES PRINCIPAIS: EMPRESTAR, DEVOLVER E LISTAR ACERVO
    // =========================================================================

    /**
     * Realiza o empréstimo de um item para um usuário, validando:
     * 1. Se o item existe no acervo;
     * 2. Se o item está disponível no momento;
     * 3. Se o usuário ainda não atingiu seu limite máximo de itens simultâneos.
     *
     * @param codigoItem Código do item desejado
     * @param usuario    Usuário que está solicitando o empréstimo
     * @return true se o empréstimo foi aprovado, false se foi recusado
     */
    public boolean emprestar(String codigoItem, Usuario usuario) {
        ItemBiblioteca item = buscarItemPorCodigo(codigoItem);

        // 1. Verifica se o item existe
        if (item == null) {
            System.out.println("❌ [EMPRÉSTIMO RECUSADO] Item com código '" + codigoItem + "' não encontrado no acervo.");
            return false;
        }

        // 2. Verifica se o item está disponível
        if (!item.isDisponivel()) {
            System.out.println("❌ [EMPRÉSTIMO RECUSADO] O item '" + item.getTitulo() + "' (" + codigoItem + ") já está emprestado.");
            return false;
        }

        // 3. Verifica polimorficamente se o usuário atingiu o limite (3 p/ Aluno, 5 p/ Professor)
        if (!usuario.podeEmprestar()) {
            System.out.printf(
                "🚫 [EMPRÉSTIMO RECUSADO] %s atingiu o limite máximo de %d itens simultâneos! (Tentou pegar: '%s')%n",
                usuario.getNome(), usuario.getLimiteItens(), item.getTitulo()
            );
            return false;
        }

        // Efetiva o empréstimo: altera estado interno do item e incrementa contador do usuário
        item.marcarComoEmprestado();
        usuario.registrarEmprestimo();

        System.out.printf(
            "📚 [EMPRÉSTIMO APROVADO] '%s' (%s) emprestado para %s. Prazo de devolução: %d dias (Itens com o usuário: %d/%d).%n",
            item.getTitulo(), item.getCodigo(), usuario.getNome(),
            item.getPrazoDias(), usuario.getQuantidadeEmprestada(), usuario.getLimiteItens()
        );
        return true;
    }

    /**
     * Realiza a devolução de um item emprestado, recebendo a quantidade de dias
     * que o item permaneceu com o usuário para calcular e exibir eventual multa.
     *
     * @param codigoItem     Código do item que está sendo devolvido
     * @param usuario        Usuário que está devolvendo o item
     * @param diasEmprestado Quantidade total de dias que o usuário ficou com o item
     * @return true se a devolução foi concluída com sucesso
     */
    public boolean devolver(String codigoItem, Usuario usuario, int diasEmprestado) {
        ItemBiblioteca item = buscarItemPorCodigo(codigoItem);

        if (item == null) {
            System.out.println("❌ [DEVOLUÇÃO ERRO] Item com código '" + codigoItem + "' não pertence ao acervo.");
            return false;
        }

        if (item.isDisponivel()) {
            System.out.println("⚠️ [DEVOLUÇÃO AVISO] O item '" + item.getTitulo() + "' já consta como disponível na biblioteca.");
            return false;
        }

        // Altera disponibilidade como consequência de devolver() (Dica 8)
        item.marcarComoDevolvido();
        usuario.registrarDevolucao();

        // Cálculo polimórfico da multa (usa getPrazoDias() e getMultaPorDia() do item real)
        double valorMulta = item.calcularMulta(diasEmprestado);
        int diasAtraso = Math.max(0, diasEmprestado - item.getPrazoDias());

        if (valorMulta > 0) {
            System.out.printf(
                "🔄 [DEVOLUÇÃO COM ATRASO] '%s' devolvido por %s após %d dias (Prazo: %d dias | Atraso: %d dias) -> 💰 Multa: R$ %.2f%n",
                item.getTitulo(), usuario.getNome(), diasEmprestado,
                item.getPrazoDias(), diasAtraso, valorMulta
            );
        } else {
            System.out.printf(
                "🔄 [DEVOLUÇÃO NO PRAZO] '%s' devolvido por %s após %d dias (Prazo: %d dias) -> Multa: R$ 0,00%n",
                item.getTitulo(), usuario.getNome(), diasEmprestado, item.getPrazoDias()
            );
        }

        return true;
    }

    /**
     * Lista todos os itens cadastrados no acervo.
     *
     * ATENÇÃO À DICA 9:
     * "listarAcervo() deve percorrer ItemBiblioteca[] em um único laço, sem nenhum if
     *  verificando o tipo do item."
     */
    public void listarAcervo() {
        System.out.println("\n=========================================================================================================");
        System.out.println("                                   LISTAGEM COMPLETA DO ACERVO                                           ");
        System.out.println("=========================================================================================================");
        for (int i = 0; i < totalItens; i++) {
            // Polimorfismo puro: chama toString() de Livro, Revista ou DVD automaticamente!
            System.out.println(acervo[i]);
        }
        System.out.println("=========================================================================================================\n");
    }

    // =========================================================================
    // MÉTODO AUXILIAR INTERNO
    // =========================================================================

    /**
     * Busca um item no array fixo pelo seu código identificador.
     *
     * @param codigo Código a ser pesquisado
     * @return Referência para o ItemBiblioteca ou null se não existir
     */
    private ItemBiblioteca buscarItemPorCodigo(String codigo) {
        for (int i = 0; i < totalItens; i++) {
            if (acervo[i].getCodigo().equalsIgnoreCase(codigo)) {
                return acervo[i];
            }
        }
        return null;
    }
}

