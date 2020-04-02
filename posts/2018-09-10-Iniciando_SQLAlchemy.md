---
date: 2018-09-10 20:33:15 -0300
title: Iniciando com SQLAlchemy
description: Lorem lipsunm
category: Py
tags: [SQLAlchemy, Python, "Serialização"]
coverImage: /assets/img/alchemy-1.jpg
---

Instalar o pacote do SQLAlchemy pelo repositório PiPy

```bash
pip install sqlalchemy
```

```python
engine = create_engine('sqlite:///mydb.db', poolclass=SingletonThreadPool)
```

```python
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()
```

```python
class User(Base):

    __tablename__ = 'users'

    id          =   Column(Integer, primary_key=True)
    user        =   Column(String(50), nullable=False)
    password    =   Column(String(50), nullable=False)

    def __repr__(self):
        return "<User (user='%d')>" % (self.user)
```

### Referências

[First steps with SQLAlchemy](https://bytefish.de/blog/first_steps_with_sqlalchemy/)
