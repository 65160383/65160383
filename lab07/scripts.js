// เมื่อเอกสาร HTML โหลดเสร็จ
document.addEventListener("DOMContentLoaded", function () {
    // รับอ้างอิงตัวแปรของส่วนต่างๆใน HTML
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
  
    // อาร์เรย์สำหรับเก็บรายการ Todo
    let todos = [];
  
    // เพิ่มรายการ Todo
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        // สร้างอ็อบเจ็กต์ที่เก็บข้อมูลรายการ Todo
        const todoItem = {
          text: todoText,
          completed: false,
        };
        // เพิ่มอ็อบเจ็กต์นี้ลงในอาร์เรย์
        todos.push(todoItem);
        // แสดงรายการ Todo ทั้งหมด
        renderTodoList();
        // ล้างค่าใน input
        todoInput.value = "";
      }
    }
  
    // ลบรายการ Todo
    function deleteTodo(index) {
      // ใช้เมธอด splice เพื่อลบรายการที่เลือกออกจากอาร์เรย์
      todos.splice(index, 1);
      // แสดงรายการ Todo ทั้งหมด
      renderTodoList();
    }
  
    // ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
      // เปลี่ยนสถานะการเสร็จสิ้นของรายการ Todo
      todos[index].completed = !todos[index].completed;
      // แสดงรายการ Todo ทั้งหมด
      renderTodoList();
    }
  
    // แสดงรายการ Todo บนหน้าเว็บ
    function renderTodoList() {
      console.log(todos);
      // ล้างข้อมูลในตารางรายการ Todo ทั้งหมด
      todoList.innerHTML = "";
      // วนลูปเพื่อสร้างแต่ละรายการ Todo
      for (let i = 0; i < todos.length; i++) {
        const todoItem = todos[i];
        const listItem = document.createElement("li");
        listItem.textContent = todoItem.text;
  
        if (todoItem.completed) {
          // ถ้ารายการ Todo เสร็จสิ้นแล้วให้เพิ่มคลาส "completed"
          listItem.classList.add("completed");
        }
  
        // สร้างปุ่ม "ลบ"
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "ลบ";
        // เพิ่มการฟังก์ชันลบรายการ Todo เมื่อคลิกที่ปุ่ม "ลบ"
        deleteButton.addEventListener("click", () => deleteTodo(i));
  
        // สร้างปุ่ม "เสร็จ/ยกเลิก"
        const completeButton = document.createElement("button");
        completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
        // เพิ่มการฟังก์ชันตรวจสอบ/ยกเลิกการเสร็จสิ้นเมื่อคลิกที่ปุ่ม "เสร็จ/ยกเลิก"
        completeButton.addEventListener("click", () => toggleComplete(i));
  
        // เพิ่มปุ่ม "เสร็จ/ยกเลิก" และ "ลบ" ลงในแต่ละรายการ Todo
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
  
        // เพิ่มรายการ Todo ทั้งหมดลงในตาราง
        todoList.appendChild(listItem);
      }
    }
  
    // การกดปุ่ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);
  
    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTodo();
      }
    });
  
    // แสดงรายการ Todo ครั้งแรก
    renderTodoList();
  });
  