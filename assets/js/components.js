/**
 * Veer Ashok Group - Shared Layout Components Injector (MPA)
 */

(function () {
  // Determine root path prefix based on relative folder depth
  const path = window.location.pathname;
  let basePrefix = './';
  
  if (path.includes('/about/') || path.includes('/products/') || path.includes('/gallery/') || path.includes('/services/') || path.includes('/contact/')) {
    basePrefix = '../';
  }

  // Normalize path for active link checking
  let currentPath = path;
  if (!currentPath.endsWith('/')) {
    currentPath += '/';
  }

  const isHomeActive = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/VeerAshokWeb/') || currentPath.endsWith('/VeerAshokWeb/index.html');
  const isAboutActive = currentPath.includes('/about/');
  const isProductsActive = currentPath.includes('/products/');
  const isServicesActive = currentPath.includes('/services/');
  const isGalleryActive = currentPath.includes('/gallery/');
  const isContactActive = currentPath.includes('/contact/');

  const navLinks = [
    { name: 'Home', href: basePrefix + '', active: isHomeActive },
    { name: 'About Us', href: basePrefix + 'about/', active: isAboutActive },
    { name: 'Products', href: basePrefix + 'products/', active: isProductsActive },
    { name: 'Services', href: basePrefix + 'services/', active: isServicesActive },
    { name: 'Showcase', href: basePrefix + 'gallery/', active: isGalleryActive },
    { name: 'Contact Us', href: basePrefix + 'contact/', active: isContactActive }
  ];

  // Header HTML Template
  const renderHeader = () => {
    const desktopLinksHtml = navLinks.map(link => `
      <a href="${link.href}" 
         class="transition-colors duration-200 font-bold text-sm tracking-wide ${link.active ? 'text-[#E85F0A] border-b-2 border-[#E85F0A] pb-1' : 'text-[#04364A] hover:text-[#E85F0A]'}">
        ${link.name}
      </a>
    `).join('');

    const mobileLinksHtml = navLinks.map(link => `
      <a href="${link.href}" 
         class="py-3 px-4 rounded-lg font-medium text-base transition-colors ${link.active ? 'bg-[#E85F0A] text-white font-bold' : 'text-[#04364A] hover:bg-gray-100 hover:text-[#E85F0A]'}">
        ${link.name}
      </a>
    `).join('');

    return `
      <nav id="navbar" class="fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm py-3.5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="${basePrefix}" class="flex items-center space-x-3 group">
            <img src="${basePrefix}assets/images/logo.png" alt="Veer Ashok Group Logo" class="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" />
          </a>

          <!-- Desktop Links -->
          <div class="hidden md:flex items-center space-x-8">
            ${desktopLinksHtml}
            <a href="${basePrefix}contact/" class="btn-primary text-xs py-2.5 px-6 shadow-md">
              Get Quote
            </a>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="md:hidden flex items-center">
            <button id="mobile-menu-btn" type="button" aria-label="Toggle Navigation Menu" class="text-[#04364A] hover:text-[#E85F0A] p-2 rounded-lg focus:outline-none">
              <svg id="menu-icon-open" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg id="menu-icon-close" class="w-7 h-7 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer Menu (Absolute Dropdown overlay) -->
        <div id="mobile-drawer" class="hidden md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl px-4 pt-3 pb-6 transition-all duration-200 z-50">
          <div class="flex flex-col space-y-2">
            ${mobileLinksHtml}
            <div class="pt-3 border-t border-gray-100">
              <a href="${basePrefix}contact/" class="btn-primary w-full text-center py-3 text-xs">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;
  };

  // Footer HTML Template
  const renderFooter = () => {
    return `
      <footer class="bg-[#021f2b] text-white pt-16 pb-12 border-t border-white/10 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <!-- Company Info -->
          <div class="space-y-4">
            <img src="${basePrefix}assets/images/logo.png" alt="Veer Ashok Group Logo" class="h-12 w-auto mb-4" />
            <p class="text-gray-400 text-sm leading-relaxed">
              Premiere scale provider of industrial supplies, 3D prototyping, offset printing, and localized in-house manufacturing across Pune.
            </p>
            <div class="flex space-x-3 pt-2">
              <span class="inline-block px-3 py-1 bg-[#E85F0A]/20 text-[#E85F0A] border border-[#E85F0A]/30 rounded-full text-xs font-semibold">
                Chakan Hub & Wagholi Logistics Center
              </span>
            </div>
          </div>

          <!-- Quick Links (Aligned with Top Nav) -->
          <div>
            <h4 class="text-lg font-bold text-[#E85F0A] uppercase tracking-wider mb-5">Quick Links</h4>
            <ul class="space-y-3 text-sm text-gray-300">
              <li><a href="${basePrefix}" class="hover:text-[#E85F0A] transition-colors">Home</a></li>
              <li><a href="${basePrefix}about/" class="hover:text-[#E85F0A] transition-colors">About Us</a></li>
              <li><a href="${basePrefix}products/" class="hover:text-[#E85F0A] transition-colors">Products</a></li>
              <li><a href="${basePrefix}services/" class="hover:text-[#E85F0A] transition-colors">Services</a></li>
              <li><a href="${basePrefix}gallery/" class="hover:text-[#E85F0A] transition-colors">Showcase</a></li>
              <li><a href="${basePrefix}contact/" class="hover:text-[#E85F0A] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <!-- Direct Contacts -->
          <div>
            <h4 class="text-lg font-bold text-[#E85F0A] uppercase tracking-wider mb-5">Contact Details</h4>
            <div class="space-y-3 text-sm text-gray-300">
              <p class="flex items-start">
                <span class="font-semibold text-white mr-2">Chakan:</span> Industrial Hub, Chakan, Pune, MH
              </p>
              <p class="flex items-start">
                <span class="font-semibold text-white mr-2">Wagholi:</span> Logistics Center, Wagholi, Pune, MH
              </p>
              <p class="pt-2">
                <span class="font-semibold text-white">Phone:</span> <a href="tel:+918605067506" class="hover:text-[#E85F0A]">+91 8605067506</a>
              </p>
              <p>
                <span class="font-semibold text-white">Email:</span> <a href="mailto:contact@veerashok.com" class="hover:text-[#E85F0A]">contact@veerashok.com</a>
              </p>
            </div>
          </div>

        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 VEER ASHOK GROUP OF COMPANIES. All Rights Reserved.</p>
          <p class="mt-2 md:mt-0 font-medium tracking-wide uppercase text-gray-500">
            Quality & Service Forever | Pune, India
          </p>
        </div>
      </footer>
    `;
  };

  // Inject on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('site-header');
    if (headerContainer) {
      headerContainer.innerHTML = renderHeader();
    }

    const footerContainer = document.getElementById('site-footer');
    if (footerContainer) {
      footerContainer.innerHTML = renderFooter();
    }
  });
})();
