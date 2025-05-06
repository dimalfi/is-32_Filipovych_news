// =========================
// Виділення елементів при наведенні (mouseover, mouseout, event.target, event.relatedTarget)
// =========================

document.addEventListener('DOMContentLoaded', () => {
    const newsItems = document.querySelectorAll('.news-item');

    newsItems.forEach(item => {
        item.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = '#dff9fb';
        });

        item.addEventListener('mouseout', (event) => {
            // Перевірка, чи вийшла миша за межі елемента
            if (!event.relatedTarget || !item.contains(event.relatedTarget)) {
                event.target.style.backgroundColor = '';
            }
        });
    });
});

// =========================
// Перетягування елемента (mousedown, mousemove, mouseup)
// =========================

document.addEventListener('DOMContentLoaded', () => {
    const dragBox = document.createElement('div');
    dragBox.textContent = "Перетягни мене";
    dragBox.style.width = "150px";
    dragBox.style.height = "50px";
    dragBox.style.backgroundColor = "#74b9ff";
    dragBox.style.color = "#fff";
    dragBox.style.textAlign = "center";
    dragBox.style.lineHeight = "50px";
    dragBox.style.position = "absolute";
    dragBox.style.top = "200px";
    dragBox.style.left = "200px";
    dragBox.style.cursor = "move";
    dragBox.style.borderRadius = "5px";
    document.body.appendChild(dragBox);

    let isDragging = false;
    let offsetX, offsetY;

    dragBox.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - dragBox.getBoundingClientRect().left;
        offsetY = event.clientY - dragBox.getBoundingClientRect().top;
        dragBox.style.backgroundColor = "#0984e3";
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            dragBox.style.left = event.clientX - offsetX + 'px';
            dragBox.style.top = event.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            dragBox.style.backgroundColor = "#74b9ff";
        }
    });
});
