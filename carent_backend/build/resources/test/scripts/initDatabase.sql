create table cars (id uuid not null, description varchar(255), number int4, rental_cost int4, primary key (id));
create table orders (id uuid not null, add_date date, rental_time int4, car_id uuid, usr_id uuid, primary key (id));
create table usr (id uuid not null, add_date date, edit_date date, first_name varchar(255), last_name varchar(255), passport_number int4, password varchar(255), primary key (id));
