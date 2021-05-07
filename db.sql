create table if not exists `Noticias`(
    id int unsigned auto_increment,
    title varchar(255) not null,
    texto  text not null,
    Primary key(id)
)

insert into `Noticias`(title, texto)
value('varginha recebe ets?', 'muitos conspiracionistas dizem que varginha recebe uma quantia variavel mas existente de ets')