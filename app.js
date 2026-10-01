const Q=[];const mc=(topic,text,options,answer,explanation)=>Q.push({topic,type:'Opción múltiple',text,options,answer,explanation});const tf=(topic,text,answer,explanation)=>Q.push({topic,type:'Verdadero o falso',text,options:['Verdadero','Falso'],answer:answer?0:1,explanation});const match=(topic,text,pairs,explanation)=>Q.push({topic,type:'Une los pares',text,pairs,explanation});
[['BPMN','Según ISO 9000:2015, un proceso es…','Actividades relacionadas que transforman entradas en resultados','Una lista de departamentos','Un diagrama UML','Una pantalla',0],['BPMN','BPMN significa…','Business Process Model and Notation','Basic Project Management Notation','Business Programming Model Network','Base Process Mapping Notation',0],['BPMN','¿Qué representa cada paso ejecutable?','Evento','Actividad','Compuerta','Artefacto',1],['BPMN','Una compuerta exclusiva permite…','Activar todos los caminos','Elegir solo un camino','Guardar datos','Enviar mensajes',1],['BPMN','Una compuerta paralela sirve para…','Elegir una alternativa','Tomar varios caminos al mismo tiempo','Terminar el proceso','Agregar datos',1],['BPMN','Piscinas y carriles organizan…','La estructura física de BD','Responsabilidades, funciones o actores','Solo eventos','Reglas de código',1],['BPMN','¿Cuál es un artefacto BPMN?','Objeto de datos','Compuerta exclusiva','Evento de fin','Tarea de usuario',0],['BPMN','Las líneas sólidas conectan normalmente…','Eventos, tareas y compuertas','Anotaciones únicamente','Dos piscinas','Campos',0],['BPMN','Un flujo de mensaje muestra…','Orden interno','Información entre participantes','Una condición','Datos persistentes',1],['BPMN','Un almacén de datos es…','Una tarea manual','Lugar donde se lee o escribe información persistente','Una compuerta','Un carril',1],['Casos de Uso','Un modelo de caso de uso describe…','Cómo se programa','Qué hace el sistema desde perspectiva externa','Cómo normalizar una BD','Los colores UI',1],['Casos de Uso','Un actor puede ser…','Solo una persona','Persona, sistema o máquina que interactúa','Solo BD','Una pantalla',1],['Casos de Uso','Un caso de uso se representa con…','Rectángulo','Óvalo','Rombo','Círculo doble',1],['Casos de Uso','Un caso de uso debe nombrarse con…','Sustantivo abstracto','Verbo en infinitivo y proceso','Nombre de tabla','IP',1],['Casos de Uso','«include» significa…','Manejar excepción','Reutilizar comportamiento común','Actores iguales','Terminar proceso',1],['Casos de Uso','En «extend» la flecha apunta…','Del básico al extendido','Del extendido al básico','Actor a BD','En ambos sentidos',1],['UML','¿Qué diagrama se centra en secuencia de mensajes?','Clases','Actividades','Secuencia','Componentes',2],['UML','¿Qué diagrama muestra clases y relaciones estáticas?','Máquina de estados','Clases','Comunicación','Caso de uso',1],['Diseño I','El diseño ocurre…','Antes del análisis','Después de requisitos y antes de construir','Al terminar programación','Solo al probar',1],['Diseño I','¿Qué transforma dominio en estructuras de datos?','Interfaz','Diseño de datos y clases','Arquitectura','Rediseño',1],['Diseño I','El diseño arquitectónico define…','Colores de botones','Relación de elementos, estilos y patrones','Registros únicamente','Pruebas',1],['Diseño I','¿Cuál NO es atributo de calidad citado?','Funcionalidad','Confiabilidad','Rendimiento','Popularidad',3],['Diseño I','MVC significa…','Modelo Vista Controlador','Módulo Visual Central','Mapa de Valores Comunes','Modelo de Versión Código',0],['Diseño I','En cliente-servidor, clientes…','Ofrecen servicios','Solicitan servicios a servidores','Reemplazan red','Son BD',1],['Diseño I','Una ventaja de microservicios es…','Cambios afectan todo','Cambios aislados por servicio','No se comunican','No escalan',1],['Diseño II / UX','El DCA modela…','Interacción con entidades fuera del sistema','Colores del formulario','Tablas físicas','Historias',0],['Diseño II / UX','¿Cuál NO compone el DCA?','Sistemas superiores','Sistemas subordinados','Actores','Llaves foráneas',3],['Diseño II / UX','Una regla de oro de UI es…','Aumentar memoria','Dejar control al usuario','Cambiar sin necesidad','Mostrar tecnicismos',1],['Diseño II / UX','Reducir carga de memoria busca…','Memorizar comandos','Disminuir esfuerzo mental','Eliminar ayuda','Más formularios',1],['Diseño II / UX','La estructura de navegación es…','Disposición de menús','Tablas','Pruebas','Evento BPMN',0],['Diseño III','Una interfaz de entrada permite…','Informes finales','Introducir datos para almacenar/procesar','Dibujar BPMN','Configurar red',1],['Diseño III','Para precisión en formularios conviene…','Leyendas claras y verificación','Colores aleatorios','Sin etiquetas','Tecnicismos',0],['Diseño III','¿Qué interfaz apoya toma de decisiones?','Entrada','Salida','Actor','Compuerta',1],['Diseño III','Secuencia simple es…','Código con significado','Número sin relación con datos','Nombre alfabético','Llave foránea',1],['Diseño de datos','Orden de modelos de BD:','Físico, lógico, ER, conceptual','ER, conceptual, lógico, físico','Conceptual, ER, físico, lógico','Lógico, físico, ER, conceptual',1],['Diseño de datos','Una entidad es…','Una característica','Objeto o evento del que se recolectan datos','Relación M:N','Consulta SQL',1],['Diseño de datos','Una relación DER se dibuja con…','Rectángulo','Óvalo','Rombo','Triángulo',2],['Diseño de datos','Una clave primaria es…','Atributo único del registro','Atributo opcional','Tabla intermedia','Informe',0],['Diseño de datos','M:N en modelo lógico se vuelve…','Atributo derivado','Tabla intermedia con ambas llaves','Campo texto','1:1',1]].forEach(x=>mc(x[0],x[1],x.slice(2,6),x[6],`La respuesta correcta es: ${x[x[6]+2]}.`));
[['BPMN','Todo proceso debe iniciar con evento inicio y tener al menos un fin.',true],['BPMN','Paralelas pueden cerrarse con una exclusiva.',false],['BPMN','El flujo por defecto se toma si condiciones alternativas son falsas.',true],['BPMN','Un evento temporal puede representar timeouts.',true],['Casos de Uso','Todo caso de uso debe ser iniciado por un actor.',true],['Casos de Uso','“Gestión” sin explicar acciones es suficientemente específico.',false],['UML','Diagramas estructurales representan también relaciones estáticas.',true],['Diseño I','El diseño debe ser guía legible para quien genera código.',true],['Diseño I','Refinamiento y modularidad son conceptos de diseño.',true],['Diseño II / UX','La interacción debe poder interrumpirse y revertirse cuando corresponda.',true],['Diseño III','Al guardar se revisan campos requeridos.',true],['Diseño III','Las salidas impresas se recomiendan siempre.',false],['Diseño de datos','Metadatos describen nombre, longitud y definición de atributos.',true],['Diseño de datos','Un atributo es una característica de una entidad.',true]].forEach(x=>tf(x[0],x[1],x[2],x[2]?'Correcto: es un principio presentado en el material.':'Incorrecto: contrasta con las buenas prácticas estudiadas.'));
match('BPMN','Relaciona elemento BPMN y función.',[['Compuerta exclusiva','Selecciona exactamente una alternativa'],['Compuerta paralela','Activa caminos simultáneos'],['Objeto de datos','Representa información que fluye'],['Carril','Agrupa por responsable']],'Cada símbolo BPMN tiene una semántica particular.');match('BPMN','Une evento y significado.',[['Mensaje','Recepción o envío de comunicación'],['Error','Captura o lanzamiento de error conocido'],['Señal','Puede ser capturada varias veces'],['Terminación','Finaliza inmediatamente']],'Los eventos aportan significado al flujo.');match('Casos de Uso','Relaciona la relación con descripción.',[['Comunicación','Conecta actor y caso de uso'],['Include','Reutiliza comportamiento común'],['Extend','Maneja excepción del caso básico'],['Generalización','Identifica elementos comunes']],'Distingue las relaciones UML.');match('UML','Relaciona diagrama y foco.',[['Actividad','Proceso y flujo de datos'],['Componente','Componentes e interfaces públicas'],['Máquina de estados','Cambios según disparadores'],['Comunicación','Interacción y arquitectura interna']],'Cada diagrama modela una vista diferente.');match('Diseño I','Une fase de diseño y propósito.',[['Diseño de interfaz','Apariencia y comportamiento'],['Diseño de componentes','Procedimientos desde arquitectura'],['Diseño de datos y clases','Estructuras implementables'],['Diseño arquitectónico','Organiza elementos principales']],'Las fases se complementan.');match('Diseño III','Relaciona interfaz y finalidad.',[['Entrada','Capturar datos'],['Proceso','Pantalla intermedia para acción'],['Salida','Entregar información'],['Salida consolidada','Datos bajo criterios específicos']],'Diferencia las interfaces por su objetivo.');match('Diseño II / UX','Une regla de oro y acción.',[['Consistencia','Mantener estándares'],['Control del usuario','Permitir revertir'],['Carga de memoria baja','Ocultar tecnicismos'],['Navegación','Organizar menús']],'Las reglas guían el diseño usable.');match('Diseño de datos','Une DER y transformación.',[['Entidad','Tabla conceptual'],['Atributo','Campo de tabla'],['Identificador único','Llave primaria'],['Relación 1:M','Pata de gallina en muchos']],'El modelado evoluciona hacia la implementación.');match('Diseño de datos','Relaciona modelo y enfoque.',[['Entidad-Relación','Entidades, atributos y relaciones'],['Conceptual','Organización general'],['Lógico','Llaves foráneas'],['Físico','Depende del gestor']],'Cada modelo agrega detalle técnico.');
const s = { i: 0, a: [], r: [], left: null };
const $ = id => document.getElementById(id);

function ok(question, index = s.i) {
  const answer = s.a[index];
  return question.type === 'Une los pares'
    ? question.pairs.every((_, pairIndex) => answer && answer[pairIndex] === pairIndex)
    : answer === question.answer;
}

function showFeedback(question) {
  const correct = ok(question);
  const feedback = $('feedback');
  feedback.className = `alert ${correct ? 'alert-success' : 'alert-error'}`;
  feedback.innerHTML = `<span>${correct ? '✓' : '✕'}</span><span><strong>${correct ? 'Correcto.' : 'Incorrecto.'}</strong> ${question.explanation}</span>`;
}

function renderChoices(question, area, locked, answer) {
  const list = document.createElement('div');
  list.className = 'grid gap-3';

  question.options.forEach((option, optionIndex) => {
    const label = document.createElement('label');
    label.className = `answer-option ${locked ? 'is-locked' : ''}`;
    label.innerHTML = `<input class="radio radio-primary radio-sm mt-0.5 shrink-0" type="radio" name="answer" ${answer === optionIndex ? 'checked' : ''} ${locked ? 'disabled' : ''}><span>${option}</span>`;
    label.addEventListener('click', () => {
      if (!locked) s.a[s.i] = optionIndex;
    });
    list.append(label);
  });

  area.append(list);
}

function renderMatches(question, area, locked, answer) {
  const grid = document.createElement('div');
  grid.className = 'match-grid';
  const leftColumn = document.createElement('div');
  const rightColumn = document.createElement('div');
  leftColumn.className = rightColumn.className = 'match-column';
  const order = question.pairs.map((_, index) => index).sort((x, y) => (x * 7 % 9) - (y * 7 % 9));

  question.pairs.forEach(([term], pairIndex) => {
    const button = document.createElement('button');
    const paired = answer && answer[pairIndex] !== undefined;
    button.type = 'button';
    button.className = `btn btn-outline match-button ${(paired || s.left === pairIndex) ? `pair-${pairIndex % 5}` : ''} ${paired ? 'is-paired' : ''} ${s.left === pairIndex ? 'is-selected' : ''}`;
    button.textContent = paired ? `${term} → ${question.pairs[answer[pairIndex]][1]}` : term;
    button.disabled = locked;
    button.addEventListener('click', () => {
      if (paired) {
        const updated = { ...answer };
        delete updated[pairIndex];
        s.a[s.i] = updated;
        s.left = null;
      } else {
        s.left = pairIndex;
      }
      render();
    });
    leftColumn.append(button);
  });

  order.forEach(pairIndex => {
    const button = document.createElement('button');
    const alreadyUsed = answer && Object.values(answer).includes(pairIndex);
    button.type = 'button';
    button.className = 'btn btn-outline match-button';
    button.textContent = question.pairs[pairIndex][1];
    button.disabled = locked || alreadyUsed;
    button.addEventListener('click', () => {
      if (s.left === null) return;
      s.a[s.i] = { ...(answer || {}), [s.left]: pairIndex };
      s.left = null;
      render();
    });
    rightColumn.append(button);
  });

  grid.append(leftColumn, rightColumn);
  area.append(grid);
}

function render() {
  const question = Q[s.i];
  const locked = s.r[s.i];
  const answer = s.a[s.i];

  $('counter').textContent = `Pregunta ${s.i + 1} de ${Q.length}`;
  $('progress').max = Q.length;
  $('progress').value = s.i + 1;
  $('topic').textContent = question.topic;
  $('questionText').textContent = question.text;
  $('backBtn').disabled = s.i === 0;
  $('reviewBtn').textContent = locked
    ? (s.i === Q.length - 1 ? 'Ver resultados' : 'Siguiente')
    : 'Revisar respuesta';
  $('feedback').className = 'hidden alert';

  const area = $('answerArea');
  area.replaceChildren();
  if (question.type === 'Une los pares') renderMatches(question, area, locked, answer);
  else renderChoices(question, area, locked, answer);
  if (locked) showFeedback(question);
}

function showResults() {
  const correctAnswers = Q.filter((question, index) => ok(question, index)).length;
  const percentage = Math.round(correctAnswers / Q.length * 100);
  $('quiz').classList.add('hidden');
  $('results').classList.remove('hidden');
  $('scoreText').textContent = `${correctAnswers} de ${Q.length} respuestas correctas.`;
  $('scoreCircle').style.setProperty('--value', percentage);
  $('scoreCircle').textContent = `${percentage}%`;
  $('breakdown').innerHTML = `<div class="alert ${percentage >= 70 ? 'alert-success' : 'alert-warning'}"><span>${percentage >= 70 ? 'Buen resultado.' : 'Conviene repasar los temas con errores.'}</span></div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('startBtn').addEventListener('click', () => {
  $('welcome').classList.add('hidden');
  $('quiz').classList.remove('hidden');
  render();
});

$('reviewBtn').addEventListener('click', () => {
  const question = Q[s.i];
  if (s.r[s.i]) {
    if (s.i === Q.length - 1) return showResults();
    s.i++;
    s.left = null;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const answer = s.a[s.i];
  const incomplete = question.type === 'Une los pares'
    ? !answer || Object.keys(answer).length !== question.pairs.length
    : answer === undefined;

  if (incomplete) {
    const feedback = $('feedback');
    feedback.className = 'alert alert-warning';
    feedback.innerHTML = '<span>Selecciona una respuesta antes de continuar.</span>';
    return;
  }

  s.r[s.i] = true;
  render();
});

$('backBtn').addEventListener('click', () => {
  if (s.i === 0) return;
  s.i--;
  s.left = null;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('restartBtn').addEventListener('click', () => location.reload());
