# ContentTabs

👶🏻 _Несложная задача_<br />
💼 _Часть проекта_

<!--start_statement-->
На странице митапа есть вкладки, которые меняют содержимое страницы путём смены дочернего маршрута. 

Требуется реализовать компонент, который будет выводить список вкладок и содержимое текущей страницы:
- Единственный обязательный входной параметр `tabs` — массив объектов вида `{ to, text }`, описывающих вкладки;
- Каждая вкладка — это ссылка с текстом `text`, ведущая на маршрут `to` (может быть как строкой, так и объектом), аналогично параметру `to` в `route-link`;
- Вкладка текущей страницы выделяется классом `.content-tabs__tab_active`;
- Содержимое текущей страницы передаётся через слот, именно в него родитель будет передавать `router-view`.

Подсказка: используйте [active-class](https://router.vuejs.org/api/#active-class).

<img src="https://i.imgur.com/mDbnco5.gif" alt="Example" />
<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файл: `components/ContentTabs.vue`.

🚀 Команда запуска для ручного тестирования: `npm run serve`;<br>
приложение будет доступно на [http://localhost:8080/04-spa/01-ContentTabs](http://localhost:8080/04-spa/01-ContentTabs).

✅ Доступно автоматическое тестирование: `npm test ContentTabs`.
