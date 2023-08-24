$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<p id="tarefa-postada">${novaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
        
        $("p").click(function (){
            $(this).addClass("feito");
        });
    })
})



/*      Oi, só fiquei com uma duvida aqui:

        $('#tarefa-postada').click(function (){
            $(this).addClass("feito");
        });

        aqui em cima tentei reconhecer o clique pelo id que está no <p>, pq nao adiantou?
        Na aula por exemplo o prof usou a funcao d slidUp por uma id tbm:

        $('#botao-cancelar').click(function() {
            $('form').slideUp();
        })

        Obrigada

        */

