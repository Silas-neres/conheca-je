 // variaveis globais
 let nav = 0;
 let clicked = null ;
 
 let predefinedEvents = [
   { date: '3/15/2022', data: '15 DE MARÇO DE 2022', title: 'LOCAL: TSE', acao: 'Arrecadação de alimentos especiais para transplantados de medula óssea – etapa da Campanha "90 dias solidários"', detalhes: "Ação realizada em parceria com a HATMO, com encerramento em 29 de julho" },
   { date: '2/20/2022', data: '20 DE FEVEREIRO DE 2022', title: 'LOCAL: TSE', acao: 'Arrecadação de alimentos especiais para transplantados de medula óssea – etapa da Campanha "90 dias solidários"', detalhes: "Ação realizada em parceria com a HATMO, com encerramento em 29 de julho" },
   { date: '1/14/2022', data: '14 DE JANEIRO DE 2022', title: 'LOCAL: TSE', acao: 'Arrecadação de alimentos especiais para transplantados de medula óssea – etapa da Campanha "90 dias solidários"', detalhes: "Ação realizada em parceria com a HATMO, com encerramento em 29 de julho" },
   // Adicione mais eventos predefinidos conforme necessário
 ];

 // variavel do modal:
 const newEvent = document.getElementById('newEventModal');
 const eventDetailsDiv = document.getElementById('eventDetails');
 const backDrop = document.getElementById('modalBackDrop');
 const calendar = document.getElementById('calendar'); // div calendar:
 const weekdays = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];  // array with weekdays:

 //funções
 function openModal(date) {
   clicked = date;
   const eventDay = predefinedEvents.find((event) => event.date === clicked);

   if (eventDay) {
     eventDetailsDiv.innerHTML = `<h2 class="font-bold text-3xl mb-10">${eventDay.data}</h2><br>
                                  <div class="font-bold text-2xl mb-5 flex items-center justify-between ">${eventDay.title} <h2>STATUS: REALIZADO</h2></div><br>
                                  <h2 class="font-bold text-xl" >AÇÃO</h2>
                                  <div>${eventDay.acao}</div><br>
                                  <h2 class="font-bold text-xl">DETALHES</h2>
                                  <div>${eventDay.detalhes}</div><br>`;
     eventDetailsDiv.style.display = 'block';
     backDrop.style.display = 'block';
   }


   backDrop.style.display = 'block';
 }

 //função load() será chamada quando a pagina carregar:
 function load() {
   const date = new Date(2022, 0, 1); // Inicia em janeiro de 2022

   
   //mudar titulo do mês:
   if (nav !== 0) {
     date.setMonth(date.getMonth() + nav);
     if (date.getMonth() < 0) {
       date.setMonth(11);
       date.setFullYear(date.getFullYear() - 1);
     } else if (date.getMonth() > 11) {
       date.setMonth(0);
       date.setFullYear(date.getFullYear() + 1);
     }
   }



   const day = date.getDate();
   const month = date.getMonth();
   const year = date.getFullYear();

   const daysMonth = new Date(year, month + 1, 0).getDate();
   const firstDayMonth = new Date(year, month, 1);

   const dateString = firstDayMonth.toLocaleDateString('pt-br', {
     weekday: 'long',
     year: 'numeric',
     month: 'numeric',
     day: 'numeric',
   });

   const paddinDays = weekdays.indexOf(dateString.split(', ')[0]);

   //mostrar mês e ano:
   document.getElementById('monthDisplay').innerText = `${date.toLocaleDateString('pt-br', { month: 'long' })} ${year}`;

   calendar.innerHTML = '';

   // criando uma div com os dias:
   for (let i = 1; i <= paddinDays + daysMonth; i++) {
     const dayS = document.createElement('div');
     dayS.classList.add('day');

     const dayString = `${month + 1}/${i - paddinDays}/${year}`;

     //condicional para criar os dias de um mês:
     if (i > paddinDays) {
       dayS.innerText = i - paddinDays;

       const eventDay = predefinedEvents.find((event) => event.date === dayString);

       if (i - paddinDays === day && nav === 0) {
         dayS.id = 'currentDay';
       }

       if (eventDay) {
         const eventDiv = document.createElement('div');
         dayS.classList.add('event');
         // eventDiv.classList.add('event');
         // eventDiv.innerText = eventDay.title;
         // dayS.appendChild(dayS);

         dayS.addEventListener('click', () => openModal(dayString));
       }
     } else {
       dayS.classList.add('padding');
     }

     calendar.appendChild(dayS);
   }
 }

 function closeModal() {
   newEvent.style.display = 'none';
   eventDetailsDiv.style.display = 'none'; // Oculta a div de detalhes do evento
   backDrop.style.display = 'none';
   eventTitleInput.value = '';
   clicked = null;
   load();
 }

 // botões
 function buttons() {
   document.getElementById('backButton').addEventListener('click', () => {
     nav--;
     load();
   });

   document.getElementById('nextButton').addEventListener('click', () => {
     nav++;
     load();
   });

   document.getElementById('cancelButton').addEventListener('click', () => closeModal());

   document.getElementById('closeButton').addEventListener('click', () => closeModal());
 }
 buttons();
 load();

