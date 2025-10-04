# miproyecto-git

# 📚 Guía Completa de Comandos Básicos de Git

Una guía práctica con explicaciones detalladas y ejemplos de los comandos esenciales de Git para el control de versiones.

## 🎯 Conceptos Fundamentales

### Flujo de Trabajo en Git
```
Working Directory → Staging Area → Repository
       ↓                 ↓             ↓
  Archivos locales   Cambios       Commits
                     preparados    guardados
```

## 📋 Comandos Esenciales

### 1. Inicialización y Configuración

#### `git init`
Inicializa un nuevo repositorio de Git.
```bash
# Ejemplo:
mkdir mi-proyecto
cd mi-proyecto
git init
```

#### Configuración Inicial
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### 2. Seguimiento de Archivos

#### `git add`
Añade archivos al área de staging.
```bash
# Ejemplos:
git add archivo.txt          # Archivo específico
git add .                    # Todos los archivos
git add *.js                 # Todos los archivos JavaScript
git add src/                 # Carpeta completa
```

#### `git status`
Muestra el estado de los archivos.
```bash
git status                   # Estado general
git status -s               # Estado resumido
```

### 3. Guardado de Cambios

#### `git commit`
Guarda los cambios en el repositorio local.
```bash
# Ejemplos:
git commit -m "Mensaje descriptivo"
git commit -am "Mensaje"    # Añade y commitea en un paso
```

### 4. Trabajo con Repositorios Remotos

#### `git clone`
Copia un repositorio remoto a local.
```bash
git clone https://github.com/usuario/repo.git
git clone https://github.com/usuario/repo.git mi-carpeta
```

#### `git push`
Sube cambios al repositorio remoto.
```bash
git push origin main
git push -u origin main     # Establece rama por defecto
```

#### `git pull`
Descarga cambios del repositorio remoto.
```bash
git pull origin main
git pull --rebase          # Aplica commits locales sobre cambios remotos
```

### 5. Comparación e Historial

#### `git diff`
Muestra diferencias entre archivos.
```bash
git diff                    # Cambios no staged
git diff --staged          # Cambios staged
git diff archivo.txt       # Cambios en archivo específico
```

#### `git log`
Muestra el historial de commits.
```bash
git log                    # Historial completo
git log --oneline          # Historial resumido
git log --graph            # Con gráfico de ramas
```

## 🌿 Comandos de Ramas

### `git branch`
Gestiona ramas del repositorio.
```bash
git branch                  # Lista ramas
git branch login           # Crea rama 'login'
git branch -d login        # Elimina rama
```

### `git checkout`
Cambia entre ramas o restaura archivos.
```bash
git checkout main          # Cambia a rama main
git checkout -b nueva-rama # Crea y cambia a nueva rama
```

### `git merge` ⚡ **IMPORTANTE**
Fusiona ramas.
```bash
git checkout main
git merge login           # Fusiona rama login en main
```

## 🛠️ Comandos Adicionales Útiles

### `git remote`
Gestiona repositorios remotos.
```bash
git remote -v             # Muestra repositorios remotos
git remote add origin URL # Añade repositorio remoto
```

### `git fetch`
Descarga cambios sin fusionar.
```bash
git fetch origin
```

### `git reset`
Deshace commits o quita archivos del staging.
```bash
git reset HEAD~1          # Elimina último commit (mantiene cambios)
git reset --hard HEAD~1   # Elimina commit y cambios
```

### `git stash`
Guarda cambios temporalmente.
```bash
git stash                 # Guarda cambios
git stash list           # Lista stashes
git stash pop            # Recupera cambios
```

## 🚀 Flujo de Trabajo Típico

```bash
# 1. Clonar repositorio
git clone https://github.com/usuario/repo.git

# 2. Crear rama para nueva funcionalidad
git checkout -b nueva-funcionalidad

# 3. Hacer cambios y añadirlos
git add .
git commit -m "Añadir nueva funcionalidad"

# 4. Subir cambios
git push -u origin nueva-funcionalidad

# 5. Fusionar con rama principal
git checkout main
git pull origin main
git merge nueva-funcionalidad
git push origin main
```

## ⚡ Consejos Rápidos

### Navegación en Editores
- **Vim**: `ESC` + `:wq` + `ENTER` (guardar y salir)
- **Nano**: `Ctrl + X` + `Y` + `ENTER`

### Archivo .gitignore
Crea un archivo `.gitignore` para excluir archivos:
```
node_modules/
*.log
.env
.DS_Store
```

### Alias Útiles
```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

## 🆘 Comandos de Ayuda

```bash
git help [comando]        # Ayuda específica
git [comando] --help      # Alternativa
git [comando] -h          # Ayuda rápida
```

## 📖 Recursos Adicionales

- [Documentación Oficial de Git](https://git-scm.com/doc)
- [GitHub Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

---

**¿Problemas?** Revisa la documentación oficial o usa `git help [comando]` para más información.

¡Feliz coding! 🎉
