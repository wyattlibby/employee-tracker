INSERT into
  department (department_name)
VALUES
  ('Executive'),
  ('Sales'),
  ('Finance'),
  ('Legal'),
  ('Marketing'),
  ('IT'),
  ('HR');
  
  
INSERT into
  role (title, salary, department_id)
VALUES ('President', 400000, 1),
('CEO', 400000, 1),
('COO', 400000, 1),
('CFO', 400000, 1),
('VP', 250000, 1),
  ('Human Services Director', 400000, 1),
  ('Sales Manager', 250000, 1),
  ('Marketing Director', 250000, 1);
  
  
INSERT into
  employee (first_name, last_name, role_id, manager_id)
VALUES
  ("Allan", "Roberts", 1, 1),
  ("Bob", "Barker", 2, 1),
  ("Drew", "Carey", 3, 1),
  ("Stacey", "Billings", 4, 1),
  ("Douglas", "Trump", 5, 1),
  ("Brian", "Obama", 6, 1);