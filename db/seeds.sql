INSERT INTO departments (department_name)
VALUES ("Death Star"),
       ("Corrisant"),
       ("Hoth"),
       ("Kasheek"),
       ("Star Destroyers");

INSERT INTO roles (department_id, title, wage)
VALUES (1, "General", "$500,000"),
       (2, "Commander", "$200,000"),
       (1, "Trooper", "$500,000"),
       (3, "Pilot", "$"),
       (5, "Accountants", "$"),
       (1, "Pilot", "$"),
       (5, "General", "$");

INSERT INTO employees (first_name, last_name, roles_id)
VALUES ("Anikin", "Skywalker", 1),
       ("Obi wan", "Kenobi", 5),
       ("Fives", "CT-5555", 3),
       ("Mark", "Hamil", 4),
       ("Kevin", "Bacon", 5),
       ("Emperor", "Palpitine", 1),
       ("The", "Dude", 5);

       UPDATE employees
       SET manager_id = 6
       WHERE id IN (1, 3, 5);

       UPDATE employees
       SET manager_id = 7
       WHERE id IN (2, 4);



       


