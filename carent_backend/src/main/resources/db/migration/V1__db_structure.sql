create table cars
(
    id          uuid not null,
    description varchar(255),
    number      int4 unique,
    rental_cost int4,
    primary key (id)
);
create table clients
(
    id              uuid not null,
    add_date        date,
    edit_date       date,
    first_name      varchar(255),
    last_name       varchar(255),
    passport_number int4 unique,
    primary key (id)
);
create table orders
(
    id          uuid not null,
    add_date    date,
    rental_time int4,
    car_id      uuid,
    client_id   uuid,
    primary key (id)
);
create table usr
(
    id       uuid not null,
    add_date date,
    email    varchar(255) unique,
    name     varchar(255),
    password varchar(255),
    primary key (id)
);

alter table if exists orders add constraint FKd2p23ixwrrt395glgi9nnbj23 foreign key (car_id) references cars;
alter table if exists orders add constraint FKm2dep9derpoaehshbkkatam3v foreign key (client_id) references clients;
