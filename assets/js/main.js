/**
 * Veer Ashok Group - Main Client Logic (MPA)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile drawer navigation toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileDrawer.classList.contains('hidden');
      
      if (isHidden) {
        mobileDrawer.classList.remove('hidden');
        if (iconOpen) iconOpen.classList.add('hidden');
        if (iconClose) iconClose.classList.remove('hidden');
      } else {
        mobileDrawer.classList.add('hidden');
        if (iconOpen) iconOpen.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      }
    });

    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileDrawer.classList.add('hidden');
        if (iconOpen) iconOpen.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      }
    });

    // Auto-close menu when resizing to desktop view
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        mobileDrawer.classList.add('hidden');
        if (iconOpen) iconOpen.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      }
    });
  }

  // Sticky Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('py-2', 'shadow-md', 'bg-white/98');
        navbar.classList.remove('py-3.5');
      } else {
        navbar.classList.add('py-3.5');
        navbar.classList.remove('py-2', 'shadow-md', 'bg-white/98');
      }
    }
  });

  // RFQ Form Handler (Contact Page & Quick Quote Forms)
  const rfqForm = document.getElementById('rfq-form');
  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('rfq-name');
      const emailInput = document.getElementById('rfq-email');
      const phoneInput = document.getElementById('rfq-phone');
      const messageInput = document.getElementById('rfq-message');
      const feedbackEl = document.getElementById('rfq-feedback');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !phone) {
        if (feedbackEl) {
          feedbackEl.className = 'p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 text-sm font-semibold mb-4';
          feedbackEl.textContent = 'Please fill out all required fields (Name, Email, Phone).';
          feedbackEl.classList.remove('hidden');
        }
        return;
      }

      // Format WhatsApp message as quick fallback
      const waMessage = `Hello Veer Ashok Sales Team,%0A%0AI would like to request an RFQ:%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Inquiry:* ${encodeURIComponent(message || 'General Procurement Enquiry')}`;
      const waUrl = `https://wa.me/918605067506?text=${waMessage}`;

      if (feedbackEl) {
        feedbackEl.className = 'p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 text-sm font-semibold mb-4';
        feedbackEl.innerHTML = `
          Thank you, <strong>${name}</strong>! Your RFQ has been received. Our sales team will get back to you shortly.<br/>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="inline-block mt-2 text-[#E85F0A] underline font-bold">
            Click here to connect immediately on WhatsApp →
          </a>
        `;
        feedbackEl.classList.remove('hidden');
      }

      rfqForm.reset();
    });
  }
});
