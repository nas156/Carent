insert into cars (description, number, rental_cost, id)
values ('good one', 1234, 450, 'ab20d616-4ca1-43a7-a1f2-fc3a2c5ea5e8');

insert into cars (description, number, rental_cost, id)
values ('not bad', 1235, 240, 'ab20d616-4ca1-43a7-a1f2-fc3a2c5ea5e7');

insert into clients (add_date, edit_date, first_name, last_name, passport_number, id)
values ('2021-01-22', null, 'Danylo', 'Galich', 1234, '8327891a-80b5-4fc9-8c1d-b280d2938873');


insert into orders (add_date, car_id, client_id, rental_time, id)
values ('2021-01-22', 'ab20d616-4ca1-43a7-a1f2-fc3a2c5ea5e7', '8327891a-80b5-4fc9-8c1d-b280d2938873', 4, '40c03a9d-9420-4739-8884-c6b008073a75')
