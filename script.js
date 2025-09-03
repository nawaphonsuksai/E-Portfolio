// แสดงข้อความต้อนรับ
console.log("Welcome to Nawaphon's Portfolio 🎉");

document.addEventListener("DOMContentLoaded", () => {
  // ทำให้ลิงก์เมนูเลื่อนนุ่ม (Smooth Scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ปุ่มกลับขึ้นด้านบน
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
