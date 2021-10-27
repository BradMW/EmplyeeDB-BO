INSERT INTO departments (department_name)
VALUES ("Death Star"),
       ("Coruscant"),
       ("Hoth"),
       ("Kashyyyk"),
       ("Star Destroyers");

INSERT INTO roles (department_id, title, wage)
VALUES (1, "General", "$500,000"),
       (2, "Commander", "$200,000"),
       (1, "Trooper", "$500,000"),
       (3, "Pilot", "$"),
       (5, "Accountants", "$"),
       (1, "Pilot", "$"),
       (5, "Crew", "$");

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Anikin", "Skywalker", 1, null),
       ("Obi wan", "Kenobi", 5, null),
       ("Fives", "CT-5555", 3, null),
       ("Mark", "Hamill", 4, null),
       ("Kevin", "Bacon", 5, null),
       ("Emperor", "Palpatine", 1, 1),
       ("The", "Dude", 5, 2);

       UPDATE employees
       SET manager_id = 6
       WHERE id IN (1, 3, 5);

       UPDATE employees
       SET manager_id = 7
       WHERE id IN (2, 4);



       


