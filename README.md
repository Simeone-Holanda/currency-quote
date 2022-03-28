# currency-quote
Teste para vaga de desenvolvedor Full Stack. A descrição do desafio pode ser encontrada <a href='https://github.com/beetellergroup/selecao-full-stack'>Aqui</a> . 


# Estratégia e decisões tomadas
<p> Minha estratégia inicial foi iniciar com o front-end, poís como meu domínio no back-end era maior eu podia tentar deixar o melhor posível e quando finalmente estivesse agradável visualmente, o back-end seria feito de maneira mais rápida.
</p>
<p> 
Seguindo essa logica criei as telas de Login, Cadastro e Dashboard e então busquei fazer o principal do projeto que era o consumo das apis para finalmente conectar com o front-end, feito isso iniciei o back e após criar minhas views para consumir e modelar os dados de uma forma mais agradável e adaptável no front, segui para a parte de cadastro, até esse ponto estava tudo oks, porém comecei a enfrentar dificuldades que iriam me tomar muito tempo para resolver por está usando apenas o django bruto para criar apis, então resolvi migrar para o djangorestframework, poís ele me daria suporte a alguns mecanismos que facilitavam minha vida, mesmo nesse ponto ainda estava enfrentando dificuldades com relação aos métodos POSTS recebidos pelo front-end devido a proteção CSRF do django, mas apos algumas horas buscando formas de configurar tudo passou a pegar normalmente e nesse ponto deixei possível que apenas meu front-end comumisse minhas apis, logo qualquer outra forma de consumo dos dados vai ser bloquado pelo sistema de CSRF que o django mesmo se encarrega de cuidar, finalizado essa versão inicial do back e do front, comecei a fazer as interligações e aprimorar minhas funções de ambas as partes e no final tratei da parte de segurança restrigindo o acesso apenas as pessoas cadastradas e criptografando as senhas dos usuários. 
</p>
<p> Sobre a aplicação de responsividade, como era algo que eu ainda estava estudando a pouco tempo fui em busca de contéudos que me auxiliasse nessa parte e acredito que consegui atingir um alyout agradável e adaptável a diversos dispositivos.
O Mesmo caso ocorreu para a parte de mudar o idioma do site, tendo em vista que eu nunca tinha mexido com essa parte foi massa de D+, afinal é de desáfio e novidades que nos devs gostamos.</p>



# Passos para executar a aplicação: 

## Back-end
    git clone https://github.com/Simeone-Holanda/currency-quote

    cd currency-quote
    
    cd back-end

    python -m venv venv

    source venv/bin/activate No Linux

    source venv/Scripts/activate - No Windows(com o git bash)

    pip install -r requirements.txt 

    python manage.py migrate 

    python manage.py runserver 

## Front-end 
    Abra um novo terminal e vá ate a pasta front-end desse repositório
    yarn install - Instalando as dependencias 
    yarn dev  - executando a aplicação 

## Feito com muito esforço por Simeone Aquino de Holanda, espero que gostem . \0/ 
