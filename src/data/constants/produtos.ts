import Produto from "../model/Produto";

const produtos: Produto[] = [
    {
      "id": 1,
      "nome": "Porta de Madeira Lisa",
      "descricao": "Porta de madeira maciça, acabamento liso, ideal para ambientes internos.",
      "preco": 299.99,
      "imagem": "https://images.unsplash.com/photo-1560185127-6a8c79b88c9e"
    },
    {
      "id": 2,
      "nome": "Janela de Alumínio Branco",
      "descricao": "Janela padrão em alumínio branco, resistente e de fácil instalação.",
      "preco": 189.50,
      "imagem": "https://images.unsplash.com/photo-1523413668677-4d8a30ab5c26"
    },
    {
      "id": 3,
      "nome": "Furadeira de Impacto 600W",
      "descricao": "Furadeira elétrica de impacto com potência de 600W, ideal para perfurações em concreto e alvenaria.",
      "preco": 159.99,
      "imagem": "https://images.unsplash.com/photo-1581091870622-1e6b82fc5731"
    },
    {
      "id": 4,
      "nome": "Porta Pivotante de Aço",
      "descricao": "Porta pivotante em aço, resistente e segura, acabamento moderno.",
      "preco": 489.90,
      "imagem": "https://images.unsplash.com/photo-1602810317280-394c14d66d67"
    },
    {
      "id": 5,
      "nome": "Kit Ferramentas 30 peças",
      "descricao": "Kit de ferramentas com 30 peças, inclui chave de fenda, alicate, chave inglesa e mais.",
      "preco": 79.99,
      "imagem": "https://images.unsplash.com/photo-1516675302203-7a3e5a2a806f"
    },
    {
      "id": 6,
      "nome": "Janela de PVC com Grade",
      "descricao": "Janela de PVC com grade de segurança, resistente à umidade e de fácil limpeza.",
      "preco": 259.00,
      "imagem": "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
    },
    {
      "id": 7,
      "nome": "Serra Circular 1200W",
      "descricao": "Serra circular elétrica de 1200W, lâmina de 7 polegadas, ideal para cortes precisos em madeira.",
      "preco": 299.50,
      "imagem": "https://images.unsplash.com/photo-1601066484287-93ac576f6b23"
    },
    {
      "id": 8,
      "nome": "Porta de Correr de Vidro",
      "descricao": "Porta de correr em vidro temperado, moderna e elegante, para ambientes internos.",
      "preco": 699.00,
      "imagem": "https://images.unsplash.com/photo-1582500857357-98a6ee9353dc"
    },
    {
      "id": 9,
      "nome": "Martelo de Borracha",
      "descricao": "Martelo de borracha profissional, cabo ergonômico, ideal para trabalhos delicados.",
      "preco": 19.99,
      "imagem": "https://images.unsplash.com/photo-1584466977770-7b98dd85b3cf"
    },
    {
      "id": 10,
      "nome": "Janela Basculante de Madeira",
      "descricao": "Janela basculante em madeira tratada, resistente e fácil de instalar.",
      "preco": 149.90,
      "imagem": "https://images.unsplash.com/photo-1557201161-7059599d43e0"
    },
    {
      "id": 11,
      "nome": "Chave de Impacto 800W",
      "descricao": "Chave de impacto elétrica de 800W, alta torque, para aperto e desaperto de parafusos.",
      "preco": 249.99,
      "imagem": "https://images.unsplash.com/photo-1577212015151-186acb12e4f9"
    },
    {
      "id": 12,
      "nome": "Porta Balcão de Alumínio",
      "descricao": "Porta balcão em alumínio, com vidro temperado, ideal para áreas externas.",
      "preco": 589.00,
      "imagem": "https://images.unsplash.com/photo-1511974035430-5de47d3b95da"
    },
    {
      "id": 13,
      "nome": "Plaina Elétrica 800W",
      "descricao": "Plaina elétrica de 800W, regulagem de profundidade, para acabamentos precisos em madeira.",
      "preco": 189.50,
      "imagem": "https://images.unsplash.com/photo-1525957596374-1b83b110a82d"
    },
    {
      "id": 14,
      "nome": "Fechadura Eletrônica Digital",
      "descricao": "Fechadura eletrônica com senha e chave física, segurança e praticidade para sua casa.",
      "preco": 349.90,
      "imagem": "https://images.unsplash.com/photo-1570396303953-d1aa285799dc"
    },
    {
      "id": 15,
      "nome": "Janela Anti-Ruído PVC",
      "descricao": "Janela de PVC anti-ruído, reduz até 50% do som externo, ideal para áreas urbanas.",
      "preco": 349.00,
      "imagem": "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
    },
    {
      "id": 16,
      "nome": "Serra Tico-Tico 600W",
      "descricao": "Serra tico-tico elétrica de 600W, lâmina ajustável, para cortes curvos e precisos.",
      "preco": 129.99,
      "imagem": "https://images.unsplash.com/photo-1581090414953-d7a01a1fa37d"
    },
    {
      "id": 17,
      "nome": "Kit Chaves de Precisão 20 peças",
      "descricao": "Kit com 20 chaves de precisão para eletrônicos e pequenos reparos.",
      "preco": 29.99,
      "imagem": "https://images.unsplash.com/photo-1581092795674-0909bcb7a016"
    },
    {
      "id": 18,
      "nome": "Porta Sanfonada PVC",
      "descricao": "Porta sanfonada em PVC, leve e resistente, ideal para dividir ambientes.",
      "preco": 99.90,
      "imagem": "https://images.unsplash.com/photo-1584459318696-79f644d1ad41"
    },
    {
      "id": 19,
      "nome": "Esmerilhadeira Angular 900W",
      "descricao": "Esmerilhadeira angular elétrica de 900W, disco de 4.5 polegadas, para cortes e desbastes.",
      "preco": 179.00,
      "imagem": "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60"
    },
    {
      "id": 20,
      "nome": "Janela de Vidro Temperado",
      "descricao": "Janela em vidro temperado, resistente e segura, ideal para residências.",
      "preco": 399.00,
      "imagem": "https://images.unsplash.com/photo-1555696958-c870bb9a6e1b"
    },
    {
      "id": 21,
      "nome": "Alicate de Pressão",
      "descricao": "Alicate de pressão com ajuste rápido, ideal para trabalhos de fixação e segurança.",
      "preco": 39.99,
      "imagem": "https://images.unsplash.com/photo-1557163569-b8aeca50d838"
    },
    {
      "id": 22,
      "nome": "Porta Pivotante de Madeira",
      "descricao": "Porta pivotante em madeira maciça, resistente e com design clássico.",
      "preco": 569.00,
      "imagem": "https://images.unsplash.com/photo-1584996202148-e8869a1e1961"
    },
    {
      "id": 23,
      "nome": "Furadeira Sem Fio 18V",
      "descricao": "Furadeira sem fio com bateria de 18V, leve e portátil, ideal para pequenos reparos.",
      "preco": 219.50,
      "imagem": "https://images.unsplash.com/photo-1563297278-516daf15cea1"
    },
    {
      "id": 24,
      "nome": "Serra de Bancada 1500W",
      "descricao": "Serra de bancada elétrica de 1500W, mesa ajustável, para cortes retos em madeira.",
      "preco": 489.90,
      "imagem": "https://images.unsplash.com/photo-1575147583233-36e8d7fcee17"
    },
    {
      "id": 25,
      "nome": "Porta de Madeira com Vidro",
      "descricao": "Porta de madeira com vidro, design clássico e elegante, ideal para salas de estar.",
      "preco": 459.99,
      "imagem": "https://images.unsplash.com/photo-1601070308261-00b2e192dcd1"
    },
    {
      "id": 26,
      "nome": "Marreta 2kg",
      "descricao": "Marreta de 2kg com cabo reforçado, ideal para demolição e trabalhos pesados.",
      "preco": 44.99,
      "imagem": "https://images.unsplash.com/photo-1581092332897-e2de2b225b43"
    },
    {
      "id": 27,
      "nome": "Janela de Alumínio Preto",
      "descricao": "Janela padrão em alumínio preto, resistente e moderna, ideal para áreas externas.",
      "preco": 279.00,
      "imagem": "https://images.unsplash.com/photo-1578146831452-d7cfb6d85d46"
    },
    {
      "id": 28,
      "nome": "Kit Parafusos e Buchas 100 peças",
      "descricao": "Kit com 100 parafusos e buchas variadas, ideal para fixação em paredes e madeiras.",
      "preco": 14.99,
      "imagem": "https://images.unsplash.com/photo-1580638056049-fd772f0850f1"
    },
    {
      "id": 29,
      "nome": "Porta de Correr PVC",
      "descricao": "Porta de correr em PVC, resistente à umidade, ideal para banheiros e cozinhas.",
      "preco": 299.00,
      "imagem": "https://images.unsplash.com/photo-1564327937899-0a9106a4e251"
    },
    {
      "id": 30,
      "nome": "Martelo Unha de Aço",
      "descricao": "Martelo de aço com cabo de madeira, ideal para construção e reparos em geral.",
      "preco": 24.99,
      "imagem": "https://images.unsplash.com/photo-1581090355292-2600ede08fa5"
    },
    {
      "id": 31,
      "nome": "Janela de Madeira Rústica",
      "descricao": "Janela de madeira rústica, ideal para decorações em estilo country.",
      "preco": 349.90,
      "imagem": "https://images.unsplash.com/photo-1536492257394-2521ed93971b"
    },
    {
      "id": 32,
      "nome": "Plaina Manual de Madeira",
      "descricao": "Plaina manual de madeira, ideal para pequenos acabamentos em marcenaria.",
      "preco": 69.90,
      "imagem": "https://images.unsplash.com/photo-1555544012-62cbe6fa8db7"
    },
    {
      "id": 33,
      "nome": "Porta Lateral de Alumínio",
      "descricao": "Porta lateral em alumínio com vidro, resistente e moderna.",
      "preco": 399.00,
      "imagem": "https://images.unsplash.com/photo-1600641291836-57e4a5d08e1e"
    },
    {
      "id": 34,
      "nome": "Serra Sabre 750W",
      "descricao": "Serra sabre elétrica de 750W, lâmina ajustável, para cortes rápidos e precisos.",
      "preco": 259.99,
      "imagem": "https://images.unsplash.com/photo-1581090045371-6166c17af2a6"
    },
    {
      "id": 35,
      "nome": "Chave Allen 10 peças",
      "descricao": "Kit com 10 chaves Allen de diversos tamanhos, ideal para montagem de móveis e bicicletas.",
      "preco": 19.99,
      "imagem": "https://images.unsplash.com/photo-1581093650894-281be77f7f2b"
    },
    {
      "id": 36,
      "nome": "Porta Vaivém de Alumínio",
      "descricao": "Porta vaivém em alumínio, ideal para cozinhas industriais e áreas de serviço.",
      "preco": 249.00,
      "imagem": "https://images.unsplash.com/photo-1581091392573-752bf24f5bfb"
    },
    {
      "id": 37,
      "nome": "Furadeira de Bancada 500W",
      "descricao": "Furadeira de bancada com motor de 500W, ajuste de profundidade para perfurações precisas.",
      "preco": 399.50,
      "imagem": "https://images.unsplash.com/photo-1581092549056-d4900b33e6a4"
    },
    {
      "id": 38,
      "nome": "Janela Veneziana de Alumínio",
      "descricao": "Janela veneziana em alumínio, resistente e prática, ideal para áreas externas.",
      "preco": 299.00,
      "imagem": "https://images.unsplash.com/photo-1600156579488-5ecf3424e9f4"
    },
    {
      "id": 39,
      "nome": "Lima Chata 200mm",
      "descricao": "Lima chata de 200mm, ideal para desbastes e ajustes em metal e madeira.",
      "preco": 14.90,
      "imagem": "https://images.unsplash.com/photo-1584464864086-c2d40c22b180"
    },
    {
      "id": 40,
      "nome": "Porta de Madeira Rústica",
      "descricao": "Porta de madeira rústica com acabamento envelhecido, ideal para decorações em estilo country.",
      "preco": 549.00,
      "imagem": "https://images.unsplash.com/photo-1575084161956-c98f437c5dc3"
    }
  ]
  