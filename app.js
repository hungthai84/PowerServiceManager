// Mock initial project data based on the attached mockup image
let projects = [
  {
    id: 1,
    name: 'Vox',
    category: 'Design',
    logo: 'vox',
    tasksCompleted: 16,
    tasksTotal: 24,
    budget: 22200,
    dueDate: '2025-02-12',
    team: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
    ]
  },
  {
    id: 2,
    name: 'Facebook Ads Campaign',
    category: 'Marketing',
    logo: 'facebook',
    tasksCompleted: 34,
    tasksTotal: 42,
    budget: 24800,
    dueDate: '2025-01-30',
    team: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100'
    ]
  },
  {
    id: 3,
    name: 'Dribbble Redesign',
    category: 'Design',
    logo: 'dribbble',
    tasksCompleted: 56,
    tasksTotal: 66,
    budget: 12000,
    dueDate: '2025-01-30',
    team: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100'
    ]
  },
  {
    id: 4,
    name: 'Instagram App Design',
    category: 'Design',
    logo: 'instagram',
    tasksCompleted: 12,
    tasksTotal: 14,
    budget: 24200,
    dueDate: '2025-01-30',
    team: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100'
    ]
  },
  {
    id: 5,
    name: 'Airbnb App Redesign',
    category: 'Design',
    logo: 'airbnb',
    tasksCompleted: 74,
    tasksTotal: 80,
    budget: 24200,
    dueDate: '2025-01-30',
    team: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
    ]
  },
  {
    id: 6,
    name: 'Pinterest App Redesign',
    category: 'Design',
    logo: 'pinterest',
    tasksCompleted: 42,
    tasksTotal: 80,
    budget: 24200,
    dueDate: '2025-01-30',
    team: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100'
    ]
  },
  {
    id: 7,
    name: 'Figma Product Update',
    category: 'Marketing',
    logo: 'figma',
    tasksCompleted: 42,
    tasksTotal: 80,
    budget: 24200,
    dueDate: '2025-01-30',
    team: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100'
    ]
  },
  {
    id: 8,
    name: 'Google Ads Campaign',
    category: 'Marketing',
    logo: 'google',
    tasksCompleted: 40,
    tasksTotal: 44,
    budget: 24200,
    dueDate: '2025-01-30',
    team: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100'
    ]
  },
  {
    id: 9,
    name: 'Meridia Website Design',
    category: 'Design',
    logo: 'meridia',
    tasksCompleted: 58,
    tasksTotal: 62,
    budget: 24200,
    dueDate: '2025-03-31',
    team: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100'
    ]
  }
];

// SVGs for each brand logo/icon
const brandIcons = {
  vox: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4L22 12l-7.6 2.6L12 22l-2.4-7.4L2 12l7.6-2.6L12 2z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>`,
  dribbble: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  airbnb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21a6 6 0 0 1-6-6c0-3.3 3.6-7.5 5.5-9.4a.7.7 0 0 1 1 0c1.9 1.9 5.5 6.1 5.5 9.4a6 6 0 0 1-6 6zm0 0c-1.3 0-2.5-.7-3-2a3 3 0 0 1 6 0c-.5 1.3-1.7 2-3 2z"/></svg>`,
  pinterest: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.23 2.63 7.85 6.4 9.34-.1-.79-.2-2-.04-2.87.14-.78.93-3.95.93-3.95s-.24-.48-.24-1.18c0-1.11.64-1.94 1.45-1.94.68 0 1.01.51 1.01 1.13 0 .69-.44 1.72-.67 2.67-.19.8.4 1.45 1.19 1.45 1.43 0 2.53-1.5 2.53-3.68 0-1.92-1.38-3.26-3.35-3.26-2.28 0-3.62 1.71-3.62 3.48 0 .69.27 1.43.6 1.83.07.08.08.15.06.23l-.22.9c-.04.15-.12.18-.28.11-1.04-.48-1.69-2-1.69-3.22 0-2.62 1.9-5.03 5.49-5.03 2.88 0 5.12 2.05 5.12 4.8 0 2.86-1.8 5.16-4.3 5.16-.84 0-1.63-.44-1.9-.96l-.52 1.97c-.19.73-.7 1.64-1.04 2.19 1 .3 2.06.47 3.16.47 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>`,
  figma: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 12a3.5 3.5 0 1 1 0-7H12v7H8.5zm0-7a3.5 3.5 0 0 0 0 7H5V8.5A3.5 3.5 0 0 0 8.5 5zm7 3.5a3.5 3.5 0 1 1-7 0V5h3.5a3.5 3.5 0 0 1 3.5 3.5zM12 12v3.5a3.5 3.5 0 1 1-3.5-3.5H12zm3.5 0a3.5 3.5 0 1 1 0 7H12v-7h3.5z"/></svg>`,
  google: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.82 0-8.728-3.908-8.728-8.728s3.908-8.728 8.728-8.728c2.19 0 4.18.8 5.73 2.345l3.085-3.085C18.665 1.1 15.65 0 12.24 0 5.48 0 0 5.48 0 12.24s5.48 12.24 12.24 12.24c6.88 0 12.24-5.36 12.24-12.24 0-.825-.075-1.62-.225-2.385H12.24z"/></svg>`,
  meridia: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h12v4l-4 4 4 4v4H6v-4l4-4-4-4V2zm2 2v1.5l3.5 3.5-3.5 3.5V18h8v-3.5l-3.5-3.5 3.5-3.5V4H8z"/></svg>`
};

// UI Elements References
const projectsGrid = document.getElementById('projects-grid');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');
const gridViewBtn = document.getElementById('grid-view-btn');
const listViewBtn = document.getElementById('list-view-btn');
const addProjectBtn = document.getElementById('add-project-btn');
const addProjectModal = document.getElementById('add-project-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCancelBtn = document.getElementById('modal-cancel-btn');
const projectForm = document.getElementById('project-form');
const navItems = document.querySelectorAll('.nav-item');

// Application States
let currentView = 'grid'; // grid | list
let filterCategory = 'All';
let sortBy = 'upcoming';
let searchQuery = '';

// Initialize Lucide Icons
lucide.createIcons();

// Helper to format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
}

// Helper to format due date to matches: 12 Feb, 2025
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

// Render active projects list
function renderProjects() {
  // Clear display container
  projectsGrid.innerHTML = '';

  // Filter & search logic
  let filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || p.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Sorting logic
  filteredProjects.sort((a, b) => {
    if (sortBy === 'upcoming') {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else if (sortBy === 'budget-high') {
      return b.budget - a.budget;
    } else if (sortBy === 'budget-low') {
      return a.budget - b.budget;
    } else if (sortBy === 'progress') {
      const progressA = a.tasksCompleted / a.tasksTotal;
      const progressB = b.tasksCompleted / b.tasksTotal;
      return progressB - progressA;
    }
    return 0;
  });

  if (filteredProjects.length === 0) {
    projectsGrid.innerHTML = `
      <div class="no-results">
        <p>No projects found matching the criteria.</p>
      </div>
    `;
    return;
  }

  // Create project card elements
  filteredProjects.forEach(project => {
    const progressPercent = Math.round((project.tasksCompleted / project.tasksTotal) * 100);
    const logoSvg = brandIcons[project.logo.toLowerCase()] || brandIcons.vox;

    const card = document.createElement('div');
    card.className = `project-card ${currentView}-card-layout`;
    card.setAttribute('data-id', project.id);

    // Dynamic markup based on current view layout (grid vs list)
    card.innerHTML = `
      <div class="card-header">
        <div class="project-brand">
          <div class="project-logo-box ${project.logo.toLowerCase()}">
            ${logoSvg}
          </div>
          <div class="project-info-text">
            <h3 class="project-title">${project.name}</h3>
          </div>
        </div>
        <span class="category-tag">${project.category}</span>
      </div>

      <div class="divider"></div>

      <div class="card-details">
        <div class="detail-item">
          <span class="detail-label">Tasks</span>
          <span class="detail-value">${project.tasksCompleted}/${project.tasksTotal}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Budget</span>
          <span class="detail-value">${formatCurrency(project.budget)}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Due on</span>
          <span class="detail-value">${formatDate(project.dueDate)}</span>
        </div>
      </div>

      <div class="card-footer">
        <div class="team-avatars">
          ${project.team.slice(0, 3).map(avatar => `
            <img src="${avatar}" alt="Team member" class="team-avatar">
          `).join('')}
          ${project.team.length > 3 ? `
            <div class="avatar-more">+${project.team.length - 3}</div>
          ` : ''}
        </div>
      </div>
    `;

    projectsGrid.appendChild(card);
  });
}

// Event Listeners for Filters and Actions
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderProjects();
});

categoryFilter.addEventListener('change', (e) => {
  filterCategory = e.target.value;
  renderProjects();
});

sortFilter.addEventListener('change', (e) => {
  sortBy = e.target.value;
  renderProjects();
});

// View Switchers
gridViewBtn.addEventListener('click', () => {
  currentView = 'grid';
  gridViewBtn.classList.add('active');
  listViewBtn.classList.remove('active');
  projectsGrid.className = 'projects-container grid-view';
  renderProjects();
});

listViewBtn.addEventListener('click', () => {
  currentView = 'list';
  listViewBtn.classList.add('active');
  gridViewBtn.classList.remove('active');
  projectsGrid.className = 'projects-container list-view';
  renderProjects();
});

// Sidebar navigation interactions
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    // Only toggle active state for items inside the primary page nav section
    if (item.closest('.nav-section-title') || item.classList.contains('label-item')) return;
    
    e.preventDefault();
    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');
  });
});

// Sidebar collapse interaction
const btnCollapse = document.querySelector('.btn-collapse');
const sidebar = document.querySelector('.sidebar');
if (btnCollapse && sidebar) {
  btnCollapse.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
}

// Modal Logic
function openModal() {
  addProjectModal.classList.add('active');
}

function closeModal() {
  addProjectModal.classList.remove('active');
  projectForm.reset();
}

addProjectBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
modalCancelBtn.addEventListener('click', closeModal);

// Add Project Form Submit
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('project-name').value;
  const category = document.getElementById('project-category').value;
  const logo = document.getElementById('project-logo').value;
  const tasksCompleted = parseInt(document.getElementById('project-tasks-done').value);
  const tasksTotal = parseInt(document.getElementById('project-tasks-total').value);
  const budget = parseFloat(document.getElementById('project-budget').value);
  const dueDate = document.getElementById('project-due').value;

  // Mock list of team avatars for new creations
  const randomAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
  ];

  // Select 3 random avatars for team
  const team = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * randomAvatars.length);
    team.push(randomAvatars[randomIndex]);
  }
  // add a +2 count avatar
  team.push('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100');
  team.push('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100');

  const newProject = {
    id: Date.now(),
    name,
    category,
    logo,
    tasksCompleted,
    tasksTotal,
    budget,
    dueDate,
    team
  };

  projects.unshift(newProject);
  renderProjects();
  updateOverviewStats();
  closeModal();
});

// Side Drawer Panel Logic
const drawerTrigger = document.getElementById('drawer-trigger');
const drawerOverlay = document.getElementById('drawer-overlay');
const drawerPanel = document.getElementById('drawer-panel');
const drawerCloseBtn = document.getElementById('drawer-close-btn');

function openDrawer() {
  drawerOverlay.classList.add('active');
  drawerPanel.classList.add('active');
}

function closeDrawer() {
  drawerOverlay.classList.remove('active');
  drawerPanel.classList.remove('active');
}

if (drawerTrigger && drawerOverlay && drawerPanel && drawerCloseBtn) {
  drawerTrigger.addEventListener('click', openDrawer);
  drawerCloseBtn.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
}

// HR Employee State
let employees = [
  { id: 1, name: "Nguyễn Văn A", department: "Quản trị điều hành", role: "Giám đốc điều hành", email: "a.nguyen@versa.vn", status: "Đang hoạt động", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
  { id: 2, name: "Trần Thị B", department: "Nhân sự (HR)", role: "Trưởng phòng HR", email: "b.tran@versa.vn", status: "Đang hoạt động", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
  { id: 3, name: "Phạm Văn C", department: "Công nghệ thông tin (IT)", role: "Kỹ sư hệ thống", email: "c.pham@versa.vn", status: "Làm việc từ xa", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" },
  { id: 4, name: "Lê Thị D", department: "Marketing", role: "Chuyên viên Content", email: "d.le@versa.vn", status: "Nghỉ phép", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" },
];

function renderEmployees() {
  const tbody = document.getElementById('employee-list-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  const searchVal = document.getElementById('hr-search-input').value.toLowerCase();
  
  const filtered = employees.filter(emp => {
    return emp.name.toLowerCase().includes(searchVal) || emp.email.toLowerCase().includes(searchVal);
  });
  
  filtered.forEach(emp => {
    let statusClass = 'active';
    if (emp.status === 'Nghỉ phép') statusClass = 'leave';
    if (emp.status === 'Làm việc từ xa') statusClass = 'remote';
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div class="emp-profile">
          <img src="${emp.avatar}" alt="${emp.name}" class="emp-avatar">
          <div style="display:flex; flex-direction:column; text-align:left;">
            <span class="emp-name" style="font-weight:700;">${emp.name}</span>
            <span style="font-size:0.75rem; color:var(--text-muted);">${emp.email}</span>
          </div>
        </div>
      </td>
      <td>${emp.department}</td>
      <td>${emp.role}</td>
      <td><span class="emp-status-badge ${statusClass}">${emp.status}</span></td>
      <td>
        <button class="btn-icon-danger" onclick="deleteEmployee(${emp.id})" title="Xóa nhân viên">
          <i data-lucide="trash-2"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  updateHRStats();
  lucide.createIcons();
}

function updateHRStats() {
  const total = employees.length;
  const active = employees.filter(e => e.status === 'Đang hoạt động').length;
  const remote = employees.filter(e => e.status === 'Làm việc từ xa').length;
  const leave = employees.filter(e => e.status === 'Nghỉ phép').length;

  const totalEl = document.getElementById('hr-stat-total');
  const activeEl = document.getElementById('hr-stat-active');
  const remoteEl = document.getElementById('hr-stat-remote');
  const leaveEl = document.getElementById('hr-stat-leave');

  if (totalEl) totalEl.textContent = total;
  if (activeEl) activeEl.textContent = active;
  if (remoteEl) remoteEl.textContent = remote;
  if (leaveEl) leaveEl.textContent = leave;
}

window.deleteEmployee = function(id) {
  employees = employees.filter(emp => emp.id !== id);
  renderEmployees();
  updateOverviewStats();
}

function updateOverviewStats() {
  const totalProj = projects.length;
  const totalTasksComp = projects.reduce((sum, p) => sum + p.tasksCompleted, 0);
  const totalTasks = projects.reduce((sum, p) => sum + p.tasksTotal, 0);
  const totalBudg = projects.reduce((sum, p) => sum + p.budget, 0);
  const activeMembers = employees.length;

  document.getElementById('overview-total-projects').textContent = totalProj;
  document.getElementById('overview-tasks-progress').textContent = `${totalTasksComp} / ${totalTasks}`;
  document.getElementById('overview-active-members').textContent = activeMembers;
  document.getElementById('overview-total-budget').textContent = formatCurrency(totalBudg);
}

// Dynamic Sub-menus database mapping (kept for reference/retrocompatibility if needed)
const departmentSubMenus = {
  "Tổng quan": [
    { id: "overview-home", label: "Bảng tin chung", icon: "layout-dashboard", view: "overview" }
  ],
  "Quản lý dự án": [
    { id: "pm-overview", label: "Tổng quan dự án", icon: "layout-dashboard", view: "overview" },
    { id: "pm-list", label: "Danh sách dự án", icon: "folder-kanban", view: "projects" },
    { id: "pm-tasks", label: "Tiến độ công việc", icon: "check-square", view: "tasks" }
  ],
  "Nhân sự (HR)": [
    { id: "hr-staff", label: "Danh sách nhân sự", icon: "users", view: "hr" },
    { id: "hr-overview", label: "Tổng quan HR", icon: "layout-dashboard", view: "generic", desc: "Báo cáo tổng hợp số liệu biến động nhân sự, tuyển dụng và đào tạo." },
    { id: "hr-payroll", label: "Lương & Phúc lợi", icon: "wallet", view: "generic", desc: "Theo dõi quỹ lương, bảng tính phúc lợi và các khoản thưởng hiệu suất." }
  ],
  "Truyền thông nội bộ": [
    { id: "com-feed", label: "Bảng tin", icon: "megaphone", view: "generic", desc: "Bảng tin chia sẻ thông điệp, văn hóa doanh nghiệp và tin tức nội bộ." },
    { id: "com-events", label: "Sự kiện", icon: "calendar", view: "generic", desc: "Lập kế hoạch tổ chức sự kiện, ngày hội gia đình và hoạt động team building." }
  ],
  "Bán hàng": [
    { id: "sale-pipeline", label: "Phễu bán hàng", icon: "shopping-cart", view: "generic", desc: "Quản lý cơ hội, khách hàng tiềm năng, doanh số dự kiến và hợp đồng." }
  ],
  "Marketing": [
    { id: "mkt-campaigns", label: "Chiến dịch quảng cáo", icon: "trending-up", view: "generic", desc: "Theo dõi ngân sách, hiệu quả ROI và tiếp cận khách hàng trên mạng xã hội." }
  ],
  "Phân tích dữ liệu": [
    { id: "da-bi", label: "Báo cáo dữ liệu", icon: "bar-chart-3", view: "generic", desc: "Hệ thống BI phân tích hành vi người dùng và tăng trưởng doanh số." }
  ],
  "Pháp lý - Tuân thủ": [
    { id: "leg-contracts", label: "Hợp đồng & Pháp quy", icon: "shield-check", view: "generic", desc: "Lưu trữ văn bản pháp lý, rà soát điều khoản hợp đồng và rủi ro tuân thủ." }
  ]
};

// Goals Mock Data
let goals = [
  { id: 1, name: "Hoàn thiện UI/UX Dashboard", department: "Quản lý dự án", current: 80, target: 100, dueDate: "2025-02-15" },
  { id: 2, name: "Tuyển dụng thêm 3 nhân sự HR", department: "Nhân sự (HR)", current: 1, target: 3, dueDate: "2025-03-01" },
  { id: 3, name: "Đạt 10,000 lượt tải App", department: "Marketing", current: 4500, target: 10000, dueDate: "2025-04-30" },
];

// Tasks Mock Data
let tasks = [
  { id: 1, name: "Thiết kế trang đăng nhập", project: "Vox", assignee: "Trần Thị B", priority: "high", status: "todo", dueDate: "2025-01-20" },
  { id: 2, name: "Tối ưu hóa cơ sở dữ liệu", project: "Vox", assignee: "Phạm Văn C", priority: "medium", status: "inprogress", dueDate: "2025-01-25" },
  { id: 3, name: "Viết tài liệu API", project: "Facebook Ads Campaign", assignee: "Lê Thị D", priority: "low", status: "done", dueDate: "2025-01-10" },
  { id: 4, name: "Họp Kick-off chiến dịch", project: "Airbnb App Redesign", assignee: "Nguyễn Văn A", priority: "high", status: "todo", dueDate: "2025-01-15" }
];

// DOM references for Dynamic Views
const viewOverview = document.getElementById('view-overview');
const viewProjects = document.getElementById('view-projects');
const viewHr = document.getElementById('view-hr');
const viewTasks = document.getElementById('view-tasks');
const viewProjectGoals = document.getElementById('view-project-goals');
const viewBlog = document.getElementById('view-blog');
const viewGeneric = document.getElementById('view-generic');
const pageTitle = document.querySelector('.page-title');

// Switch View content
function switchView(viewName, meta = {}) {
  // Hide all containers
  viewOverview.style.display = 'none';
  viewProjects.style.display = 'none';
  viewHr.style.display = 'none';
  viewGeneric.style.display = 'none';
  if (viewTasks) viewTasks.style.display = 'none';
  if (viewProjectGoals) viewProjectGoals.style.display = 'none';
  if (viewBlog) viewBlog.style.display = 'none';

  if (viewName === 'overview') {
    viewOverview.style.display = 'block';
    updateOverviewStats();
    renderGoals();
  } else if (viewName === 'projects') {
    viewProjects.style.display = 'block';
    renderProjects();
  } else if (viewName === 'hr') {
    viewHr.style.display = 'block';
    renderEmployees();
  } else if (viewName === 'tasks') {
    if (viewTasks) viewTasks.style.display = 'block';
    populateTaskFilters();
    renderTasks();
  } else if (viewName === 'project-goals') {
    if (viewProjectGoals) viewProjectGoals.style.display = 'block';
    renderProjectGoals();
  } else if (viewName === 'blog') {
    if (viewBlog) viewBlog.style.display = 'block';
    renderBlog();
  } else if (viewName === 'generic') {
    viewGeneric.style.display = 'block';
    document.getElementById('generic-title').textContent = meta.label || 'Tính năng';
    document.getElementById('generic-desc').textContent = meta.desc || 'Hệ thống đang được phát triển.';
    document.getElementById('generic-icon').setAttribute('data-lucide', meta.icon || 'help-circle');
    lucide.createIcons();
  }
}

// 2-Level Sidebar handling
const parentButtons = document.querySelectorAll('.nav-parent-item');
parentButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const group = btn.closest('.nav-parent-group');
    const wasOpen = group.classList.contains('open');
    
    // Collapse all
    document.querySelectorAll('.nav-parent-group').forEach(g => g.classList.remove('open'));
    
    if (!wasOpen) {
      group.classList.add('open');
    }
  });
});

const childItems = document.querySelectorAll('.nav-child-item');
childItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    childItems.forEach(c => c.classList.remove('active'));
    item.classList.add('active');

    const view = item.getAttribute('data-view');
    const deptName = item.getAttribute('data-dept');
    const label = item.textContent.trim();

    const meta = {
      label: item.getAttribute('data-label') || label,
      desc: item.getAttribute('data-desc') || '',
      icon: item.getAttribute('data-icon') || 'help-circle'
    };

    pageTitle.textContent = `${deptName} - ${meta.label}`;
    switchView(view, meta);

    // Close the popup after clicking
    const group = item.closest('.nav-parent-group');
    if (group) group.classList.remove('open');
  });
});

// Render Goals list on Overview
function renderGoals() {
  const container = document.getElementById('goals-list-container');
  if (!container) return;
  container.innerHTML = '';

  if (goals.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding: 20px;">Chưa có mục tiêu nào được tạo.</p>`;
    return;
  }

  goals.forEach(goal => {
    const percent = Math.round((goal.current / goal.target) * 100);
    const card = document.createElement('div');
    card.className = 'goal-item';
    card.innerHTML = `
      <div class="goal-header">
        <span class="goal-title">${goal.name}</span>
        <span class="goal-meta" style="background: rgba(139,92,246,0.1); color: var(--primary); padding: 2px 8px; border-radius: 20px; font-weight:600;">${goal.department}</span>
      </div>
      <div class="goal-progress-container">
        <div class="goal-progress-bar-bg">
          <div class="goal-progress-bar" style="width: ${Math.min(percent, 100)}%"></div>
        </div>
        <div class="goal-progress-info">
          <span>Tiến độ: ${goal.current}/${goal.target} (${percent}%)</span>
          <span style="color:var(--text-muted);">Hạn chót: ${formatDate(goal.dueDate)}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Tasks on Kanban Board
function renderTasks() {
  const todoCol = document.getElementById('tasks-todo');
  const inprogressCol = document.getElementById('tasks-inprogress');
  const doneCol = document.getElementById('tasks-done');
  if (!todoCol || !inprogressCol || !doneCol) return;

  todoCol.innerHTML = '';
  inprogressCol.innerHTML = '';
  doneCol.innerHTML = '';

  const projFilter = document.getElementById('task-project-filter').value;
  const prioFilter = document.getElementById('task-priority-filter').value;

  const filteredTasks = tasks.filter(t => {
    const matchesProj = projFilter === 'All' || t.project === projFilter;
    const matchesPrio = prioFilter === 'All' || t.priority === prioFilter;
    return matchesProj && matchesPrio;
  });

  let todoCount = 0;
  let inprogressCount = 0;
  let doneCount = 0;

  filteredTasks.forEach(task => {
    const emp = employees.find(e => e.name === task.assignee);
    const avatar = emp ? emp.avatar : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100";
    
    const card = document.createElement('div');
    card.className = 'task-card';
    card.setAttribute('draggable', 'true');
    card.setAttribute('data-id', task.id);
    
    card.innerHTML = `
      <div class="task-card-header">
        <h4 class="task-title">${task.name}</h4>
        <span class="priority-tag ${task.priority}">${task.priority === 'high' ? 'Cao' : task.priority === 'medium' ? 'Trung bình' : 'Thấp'}</span>
      </div>
      <p class="task-desc" style="font-size:0.8rem; margin: 4px 0 8px 0; color: var(--text-muted);">Dự án: <strong>${task.project}</strong></p>
      <div class="task-footer" style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(0,0,0,0.05); padding-top:8px;">
        <div class="task-assignee" style="display:flex; align-items:center; gap:6px;">
          <img src="${avatar}" alt="${task.assignee}" style="width:20px; height:20px; border-radius:50%;">
          <span style="font-size:0.75rem; font-weight:600;">${task.assignee}</span>
        </div>
        <span style="font-size:0.75rem; color:var(--text-muted);">${formatDate(task.dueDate)}</span>
      </div>
    `;

    card.addEventListener('dragstart', () => {
      card.classList.add('dragging');
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
    });

    if (task.status === 'todo') {
      todoCol.appendChild(card);
      todoCount++;
    } else if (task.status === 'inprogress') {
      inprogressCol.appendChild(card);
      inprogressCount++;
    } else if (task.status === 'done') {
      doneCol.appendChild(card);
      doneCount++;
    }
  });

  document.getElementById('todo-count').textContent = todoCount;
  document.getElementById('inprogress-count').textContent = inprogressCount;
  document.getElementById('done-count').textContent = doneCount;
}

// Kanban Drag & Drop logic
function initKanbanDragAndDrop() {
  const columns = document.querySelectorAll('.kanban-column');
  columns.forEach(col => {
    col.addEventListener('dragover', (e) => {
      e.preventDefault();
      const draggingCard = document.querySelector('.dragging');
      if (draggingCard) {
        col.querySelector('.column-tasks').appendChild(draggingCard);
      }
    });

    col.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggingCard = document.querySelector('.dragging');
      if (!draggingCard) return;
      
      const taskId = parseInt(draggingCard.getAttribute('data-id'));
      const status = col.getAttribute('data-status');
      
      const task = tasks.find(t => t.id === taskId);
      if (task && task.status !== status) {
        const oldStatus = task.status;
        task.status = status;
        
        // Sync project task progression stats
        const projObj = projects.find(p => p.name === task.project);
        if (projObj) {
          if (oldStatus === 'done' && status !== 'done') {
            projObj.tasksCompleted = Math.max(0, projObj.tasksCompleted - 1);
          } else if (oldStatus !== 'done' && status === 'done') {
            projObj.tasksCompleted = Math.min(projObj.tasksTotal, projObj.tasksCompleted + 1);
          }
          renderProjects();
          updateOverviewStats();
        }
        
        renderTasks();
      }
    });
  });
}

// Populate task page project filter
function populateTaskFilters() {
  const filterProj = document.getElementById('task-project-filter');
  if (!filterProj) return;
  const currentSelect = filterProj.value;
  
  filterProj.innerHTML = '<option value="All">Tất cả dự án</option>';
  projects.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.name;
    opt.textContent = p.name;
    filterProj.appendChild(opt);
  });
  filterProj.value = currentSelect;
}

// Populate Project & Assignee selects in modals dynamically
function populateTaskFormDropdowns() {
  const projSelect = document.getElementById('task-project');
  const userSelect = document.getElementById('task-assignee');
  if (!projSelect || !userSelect) return;

  projSelect.innerHTML = '';
  userSelect.innerHTML = '';

  projects.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.name;
    opt.textContent = p.name;
    projSelect.appendChild(opt);
  });

  employees.forEach(emp => {
    const opt = document.createElement('option');
    opt.value = emp.name;
    opt.textContent = emp.name;
    userSelect.appendChild(opt);
  });
}

// Attach filter listeners
const taskProjFilter = document.getElementById('task-project-filter');
const taskPrioFilter = document.getElementById('task-priority-filter');
if (taskProjFilter) taskProjFilter.addEventListener('change', renderTasks);
if (taskPrioFilter) taskPrioFilter.addEventListener('change', renderTasks);

// Goal Modal Actions
const addGoalBtn = document.getElementById('add-goal-btn');
const goalModal = document.getElementById('add-goal-modal');
const goalModalClose = document.getElementById('goal-modal-close-btn');
const goalModalCancel = document.getElementById('goal-modal-cancel-btn');
const goalForm = document.getElementById('goal-form');

if (addGoalBtn && goalModal) {
  addGoalBtn.addEventListener('click', () => {
    goalModal.classList.add('active');
  });
}

function closeGoalModal() {
  if (goalModal) {
    goalModal.classList.remove('active');
    goalForm.reset();
  }
}
if (goalModalClose) goalModalClose.addEventListener('click', closeGoalModal);
if (goalModalCancel) goalModalCancel.addEventListener('click', closeGoalModal);

if (goalForm) {
  goalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('goal-name').value;
    const dept = document.getElementById('goal-dept').value;
    const target = parseFloat(document.getElementById('goal-target').value);
    const current = parseFloat(document.getElementById('goal-current').value);
    const dueDate = document.getElementById('goal-due').value;

    const newGoal = {
      id: Date.now(),
      name,
      department: dept,
      current,
      target,
      dueDate
    };

    goals.push(newGoal);
    renderGoals();
    renderProjectGoals();
    closeGoalModal();
  });
}

// Task Modal Actions
const addTaskBtn = document.getElementById('add-task-btn');
const taskModal = document.getElementById('add-task-modal');
const taskModalClose = document.getElementById('task-modal-close-btn');
const taskModalCancel = document.getElementById('task-modal-cancel-btn');
const taskForm = document.getElementById('task-form');

if (addTaskBtn && taskModal) {
  addTaskBtn.addEventListener('click', () => {
    populateTaskFormDropdowns();
    taskModal.classList.add('active');
  });
}

function closeTaskModal() {
  if (taskModal) {
    taskModal.classList.remove('active');
    taskForm.reset();
  }
}
if (taskModalClose) taskModalClose.addEventListener('click', closeTaskModal);
if (taskModalCancel) taskModalCancel.addEventListener('click', closeTaskModal);

if (taskForm) {
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('task-name').value;
    const project = document.getElementById('task-project').value;
    const assignee = document.getElementById('task-assignee').value;
    const priority = document.getElementById('task-priority').value;
    const status = document.getElementById('task-status').value;
    const dueDate = document.getElementById('task-due').value;

    const newTask = {
      id: Date.now(),
      name,
      project,
      assignee,
      priority,
      status,
      dueDate
    };

    tasks.push(newTask);
    renderTasks();
    renderProjectGoals();

    // Increment project total tasks and completed if done
    const projObj = projects.find(p => p.name === project);
    if (projObj) {
      projObj.tasksTotal += 1;
      if (status === 'done') {
        projObj.tasksCompleted += 1;
      }
      renderProjects();
      updateOverviewStats();
    }

    closeTaskModal();
  });
}

// HR Modal controls
const addEmpBtn = document.getElementById('add-employee-btn');
const empModal = document.getElementById('add-employee-modal');
const empModalClose = document.getElementById('employee-modal-close-btn');
const empModalCancel = document.getElementById('employee-modal-cancel-btn');
const empForm = document.getElementById('employee-form');

if (addEmpBtn && empModal) {
  addEmpBtn.addEventListener('click', () => {
    empModal.classList.add('active');
  });
}

function closeEmpModal() {
  if (empModal) {
    empModal.classList.remove('active');
    empForm.reset();
  }
}

if (empModalClose) empModalClose.addEventListener('click', closeEmpModal);
if (empModalCancel) empModalCancel.addEventListener('click', closeEmpModal);

if (empForm) {
  empForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('emp-name').value;
    const dept = document.getElementById('emp-dept').value;
    const role = document.getElementById('emp-role').value;
    const email = document.getElementById('emp-email').value;
    const status = document.getElementById('emp-status').value;

    const avatars = [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100"
    ];
    const randAvatar = avatars[Math.floor(Math.random() * avatars.length)];

    const newEmp = {
      id: Date.now(),
      name,
      department: dept,
      role,
      email,
      status,
      avatar: randAvatar
    };

    employees.unshift(newEmp);
    renderEmployees();
    updateOverviewStats();
    closeEmpModal();
  });
}

// Attach live search to HR staff search
const hrSearchInput = document.getElementById('hr-search-input');
if (hrSearchInput) {
  hrSearchInput.addEventListener('input', () => {
    renderEmployees();
  });
}

// Right Side Drawer (Notifications) Logic
const rightDrawerTrigger = document.getElementById('right-drawer-trigger');
const rightDrawerOverlay = document.getElementById('right-drawer-overlay');
const rightDrawerPanel = document.getElementById('right-drawer-panel');
const rightDrawerCloseBtn = document.getElementById('right-drawer-close-btn');

function openRightDrawer() {
  rightDrawerOverlay.classList.add('active');
  rightDrawerPanel.classList.add('active');
}

function closeRightDrawer() {
  rightDrawerOverlay.classList.remove('active');
  rightDrawerPanel.classList.remove('active');
}

if (rightDrawerTrigger && rightDrawerOverlay && rightDrawerPanel && rightDrawerCloseBtn) {
  rightDrawerTrigger.addEventListener('click', openRightDrawer);
  rightDrawerCloseBtn.addEventListener('click', closeRightDrawer);
  rightDrawerOverlay.addEventListener('click', closeRightDrawer);
}

// Render Project-specific Goals
function renderProjectGoals() {
  const container = document.getElementById('project-goals-list-container');
  if (!container) return;
  container.innerHTML = '';

  const projectGoals = goals.filter(g => g.department === "Quản lý dự án");

  // Compute stats
  const total = projectGoals.length;
  const completed = projectGoals.filter(g => g.current >= g.target).length;
  const inprogress = total - completed;

  const totalEl = document.getElementById('goals-stat-total');
  const completedEl = document.getElementById('goals-stat-completed');
  const inprogressEl = document.getElementById('goals-stat-inprogress');

  if (totalEl) totalEl.textContent = total;
  if (completedEl) completedEl.textContent = completed;
  if (inprogressEl) inprogressEl.textContent = inprogress;

  if (projectGoals.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding: 20px; grid-column: 1 / -1;">Chưa có mục tiêu dự án nào được tạo.</p>`;
    return;
  }

  projectGoals.forEach(goal => {
    const percent = Math.round((goal.current / goal.target) * 100);
    const card = document.createElement('div');
    card.className = 'goal-item';
    card.innerHTML = `
      <div class="goal-header">
        <span class="goal-title">${goal.name}</span>
        <span class="goal-meta" style="background: rgba(16, 185, 129, 0.1); color: #10b981; padding: 2px 8px; border-radius: 20px; font-weight:600;">${percent >= 100 ? 'Hoàn thành' : 'Đang làm'}</span>
      </div>
      <div class="goal-progress-container">
        <div class="goal-progress-bar-bg">
          <div class="goal-progress-bar" style="width: ${Math.min(percent, 100)}%"></div>
        </div>
        <div class="goal-progress-info">
          <span>Tiến độ: ${goal.current}/${goal.target} (${percent}%)</span>
          <span style="color:var(--text-muted);">Hạn chót: ${formatDate(goal.dueDate)}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Bind quick actions in Goals view
const quickCreateGoal = document.getElementById('quick-create-goal');
const quickCreateProject = document.getElementById('quick-create-project');
const quickCreateTask = document.getElementById('quick-create-task');

if (quickCreateGoal) {
  quickCreateGoal.addEventListener('click', () => {
    const selectDept = document.getElementById('goal-dept');
    if (selectDept) selectDept.value = "Quản lý dự án";
    document.getElementById('add-goal-modal').classList.add('active');
  });
}

if (quickCreateProject) {
  quickCreateProject.addEventListener('click', () => {
    document.getElementById('add-project-modal').classList.add('active');
  });
}

if (quickCreateTask) {
  quickCreateTask.addEventListener('click', () => {
    populateTaskFormDropdowns();
    document.getElementById('add-task-modal').classList.add('active');
  });
}

// Initial renders
initKanbanDragAndDrop();

// Load first default item
const defaultGroup = document.querySelector('.nav-parent-item[data-dept="Tổng quan"]').closest('.nav-parent-group');
if (defaultGroup) {
  defaultGroup.classList.add('open');
  const defaultChild = defaultGroup.querySelector('.nav-child-item');
  if (defaultChild) {
    defaultChild.click();
  }
}

// Close popups when clicking outside the menu items
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-parent-group')) {
    document.querySelectorAll('.nav-parent-group').forEach(g => g.classList.remove('open'));
  }
});

// ==========================================
// BLOG / BULLETIN BOARD (DUAL VIEW) STATE & LOGIC
// ==========================================

// State variables
let blogViewMode = 'grid'; // grid | table
let blogCategoryFilter = 'All';
let blogSearchQuery = '';
let activeReadingPost = null;

// Blog Posts Mock Data
let posts = [
  {
    id: 1,
    title: 'Thông báo nâng cấp hệ thống Power Service v2.5',
    category: 'Thông báo',
    summary: 'Hệ thống Power Service sẽ được nâng cấp giao diện kính mờ và đồng bộ bo góc 10px để tối ưu hóa trải nghiệm người dùng vào cuối tuần này.',
    content: 'Kính gửi toàn thể cán bộ nhân viên,\n\nĐể cải thiện chất lượng dịch vụ và tối ưu hóa hiệu suất làm việc, bộ phận phát triển sẽ tiến hành nâng cấp hệ thống Power Service lên phiên bản 2.5.\n\nThời gian thực hiện nâng cấp: từ 22:00 ngày thứ Bảy (27/06/2026) đến 04:00 ngày Chủ Nhật (28/06/2026).\n\nTrong thời gian này, hệ thống có thể tạm thời không truy cập được. Mong các phòng ban lưu ý để sắp xếp công việc hợp lý.\n\nTrân trọng,\nBan Quản trị Hệ thống.',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    date: '2026-06-25',
    author: 'Nguyễn Văn A',
    likes: 12,
    status: 'Đã xuất bản',
    comments: [
      { author: 'Trần Thị B', text: 'Tuyệt vời! Giao diện mới nhìn rất đẹp và hiện đại.', date: '2026-06-25T10:30:00Z' },
      { author: 'Phạm Văn C', text: 'Thời gian nâng cấp vào ban đêm rất hợp lý, cảm ơn đội IT.', date: '2026-06-25T11:15:00Z' }
    ]
  },
  {
    id: 2,
    title: 'Chào mừng thành viên mới gia nhập phòng HR',
    category: 'Tin tức',
    summary: 'Chào đón chị Lê Thị D gia nhập versa với vai trò Chuyên viên Tuyển dụng và Đào tạo từ ngày 25/06/2026.',
    content: 'Chúng ta cùng chào đón chị Lê Thị D chính thức gia nhập phòng Nhân sự (HR) của đại gia đình versa.\n\nVới hơn 5 năm kinh nghiệm trong lĩnh vực quản trị nhân sự và tuyển dụng tại các tập đoàn lớn, chị D được kỳ vọng sẽ đóng góp đắc lực vào việc thu hút tài năng và xây dựng đội ngũ nhân sự vững mạnh cho versa trong thời gian tới.\n\nMọi người hãy cùng gửi lời chúc mừng và hỗ trợ chị D nhanh chóng làm quen với môi trường mới nhé!\n\nChúc chị D luôn nhiều năng lượng và thành công rực rỡ cùng versa.',
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    date: '2026-06-25',
    author: 'Trần Thị B',
    likes: 8,
    status: 'Đã xuất bản',
    comments: [
      { author: 'Lê Thị D', text: 'Cảm ơn mọi người đã đón tiếp nồng hậu ạ! Rất vui được đồng hành cùng cả nhà.', date: '2026-06-25T09:00:00Z' },
      { author: 'Nguyễn Văn A', text: 'Chào mừng em gia nhập versa. Chúc em gặt hái nhiều thành công!', date: '2026-06-25T09:45:00Z' }
    ]
  },
  {
    id: 3,
    title: '5 Bí quyết cân bằng giữa Công việc và Cuộc sống',
    category: 'Văn hóa',
    summary: 'Chia sẻ các thói quen nhỏ giúp duy trì sức khỏe tinh thần và năng suất làm việc cao cho nhân viên văn phòng.',
    content: 'Trong môi trường làm việc năng động, việc duy trì sự cân bằng giữa công việc và đời sống cá nhân là chìa khóa để giữ vững ngọn lửa nhiệt huyết. Dưới đây là 5 bí quyết nhỏ giúp bạn đạt được điều đó:\n\n1. Xác định ranh giới rõ ràng: Tắt thông báo công việc sau giờ làm.\n2. Lập kế hoạch công việc khoa học: Sử dụng Kanban Board trong Power Service để sắp xếp độ ưu tiên.\n3. Dành thời gian cho bản thân: Tập thể dục nhẹ hoặc đọc sách 30 phút mỗi ngày.\n4. Học cách từ chối: Đừng nhận quá nhiều việc ngoài tầm kiểm soát.\n5. Chia sẻ và kết nối: Tham gia các hoạt động team building cùng đồng nghiệp.\n\nHãy bắt đầu từ những thay đổi nhỏ nhất ngay hôm nay!',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    date: '2026-06-24',
    author: 'Lê Thị D',
    likes: 15,
    status: 'Đã xuất bản',
    comments: [
      { author: 'Phạm Văn C', text: 'Bài viết rất hữu ích. Tính năng Kanban của app giúp mình quản lý task tốt hơn nhiều.', date: '2026-06-24T14:20:00Z' }
    ]
  }
];

// Main Render blog coordinator
function renderBlog() {
  const gridContainer = document.getElementById('blog-grid');
  const tableContainer = document.getElementById('blog-table-container');
  if (!gridContainer || !tableContainer) return;

  // Filter posts based on category and search query
  let filteredPosts = posts.filter(post => {
    const matchesCategory = blogCategoryFilter === 'All' || post.category === blogCategoryFilter;
    const matchesSearch = post.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) || 
                          post.content.toLowerCase().includes(blogSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (blogViewMode === 'grid') {
    gridContainer.style.display = 'grid';
    tableContainer.style.display = 'none';
    renderBlogGrid(filteredPosts);
  } else {
    gridContainer.style.display = 'none';
    tableContainer.style.display = 'block';
    renderBlogTable(filteredPosts);
  }
}

// Render Blog Cards (Grid View)
function renderBlogGrid(filteredPosts) {
  const container = document.getElementById('blog-grid');
  if (!container) return;
  container.innerHTML = '';

  if (filteredPosts.length === 0) {
    container.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>Không tìm thấy bài viết nào phù hợp.</p>
      </div>
    `;
    return;
  }

  filteredPosts.forEach(post => {
    const commentsCount = post.comments ? post.comments.length : 0;
    const authorEmp = employees.find(e => e.name === post.author) || employees[0];
    const categoryClass = post.category === 'Thông báo' ? 'thong-bao' :
                          post.category === 'Tin tức' ? 'tin-tuc' :
                          post.category === 'Văn hóa' ? 'van-hoa' : 'huong-dan';

    const card = document.createElement('div');
    card.className = 'blog-card';
    card.setAttribute('data-id', post.id);
    card.innerHTML = `
      <div class="blog-card-cover">
        <img src="${post.coverImage}" alt="${post.title}" loading="lazy">
      </div>
      <div class="blog-card-content">
        <div class="blog-card-header">
          <span class="category-tag ${categoryClass}">${post.category}</span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${formatDate(post.date)}</span>
        </div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-summary">${post.summary}</p>
        <div class="blog-card-footer">
          <div class="blog-card-author">
            <img src="${authorEmp.avatar}" alt="${post.author}">
            <span class="blog-card-author-name">${post.author}</span>
          </div>
          <div class="blog-card-stats">
            <span><i data-lucide="heart" style="width: 13px; height: 13px; fill: currentColor; color: #ef4444;"></i> ${post.likes}</span>
            <span><i data-lucide="message-square" style="width: 13px; height: 13px;"></i> ${commentsCount}</span>
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openReadPostModal(post.id);
    });

    container.appendChild(card);
  });

  lucide.createIcons();
}

// Render Blog Table (Spreadsheet View with Inline Editing)
function renderBlogTable(filteredPosts) {
  const tbody = document.getElementById('blog-list-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (filteredPosts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 40px; color: var(--text-muted);">
          Không tìm thấy bài viết nào phù hợp.
        </td>
      </tr>
    `;
    return;
  }

  filteredPosts.forEach(post => {
    const commentsCount = post.comments ? post.comments.length : 0;
    const tr = document.createElement('tr');
    tr.setAttribute('data-id', post.id);

    tr.innerHTML = `
      <td>
        <div class="spreadsheet-editable-cell" data-field="title" title="Nhấp đúp để sửa tiêu đề">${post.title}</div>
      </td>
      <td>
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-weight:600;">${post.author}</span>
        </div>
      </td>
      <td>
        <select class="spreadsheet-select" data-field="category">
          <option value="Thông báo" ${post.category === 'Thông báo' ? 'selected' : ''}>Thông báo</option>
          <option value="Tin tức" ${post.category === 'Tin tức' ? 'selected' : ''}>Tin tức</option>
          <option value="Văn hóa" ${post.category === 'Văn hóa' ? 'selected' : ''}>Văn hóa</option>
          <option value="Hướng dẫn" ${post.category === 'Hướng dẫn' ? 'selected' : ''}>Hướng dẫn</option>
        </select>
      </td>
      <td>${formatDate(post.date)}</td>
      <td style="font-weight: 700; color: #ef4444;">${post.likes}</td>
      <td style="font-weight: 700; color: var(--primary);">${commentsCount}</td>
      <td>
        <select class="spreadsheet-select" data-field="status">
          <option value="Đã xuất bản" ${post.status === 'Đã xuất bản' ? 'selected' : ''}>Đã xuất bản</option>
          <option value="Nháp" ${post.status === 'Nháp' ? 'selected' : ''}>Bản nháp</option>
        </select>
      </td>
      <td>
        <div style="display:flex; gap:8px; align-items:center;">
          <button class="btn-primary" style="padding: 4px 8px; font-size: 0.75rem; background: var(--primary);" onclick="openReadPostModal(${post.id})" title="Xem chi tiết">
            <i data-lucide="eye" style="width:14px; height:14px;"></i>
          </button>
          <button class="btn-icon-danger" style="padding: 4px;" onclick="deletePost(${post.id})" title="Xóa bài viết">
            <i data-lucide="trash-2" style="width:14px; height:14px;"></i>
          </button>
        </div>
      </td>
    `;

    // Inline Editing for title on double click
    const titleCell = tr.querySelector('.spreadsheet-editable-cell[data-field="title"]');
    titleCell.addEventListener('dblclick', () => {
      const currentVal = titleCell.textContent;
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'spreadsheet-input';
      input.value = currentVal;
      titleCell.innerHTML = '';
      titleCell.appendChild(input);
      input.focus();

      const saveEdit = () => {
        const newVal = input.value.trim();
        if (newVal && newVal !== currentVal) {
          post.title = newVal;
        }
        titleCell.innerHTML = post.title;
      };

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          saveEdit();
        } else if (e.key === 'Escape') {
          titleCell.innerHTML = currentVal;
        }
      });

      input.addEventListener('blur', saveEdit);
    });

    // Inline select change for category
    const categorySelect = tr.querySelector('select[data-field="category"]');
    categorySelect.addEventListener('change', (e) => {
      post.category = e.target.value;
      renderBlog();
    });

    // Inline select change for status
    const statusSelect = tr.querySelector('select[data-field="status"]');
    statusSelect.addEventListener('change', (e) => {
      post.status = e.target.value;
    });

    tbody.appendChild(tr);
  });

  lucide.createIcons();
}

// Delete Blog Post
window.deletePost = function(id) {
  if (confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
    posts = posts.filter(post => post.id !== id);
    renderBlog();
  }
}

// Open Post Modal (Reading Mode)
window.openReadPostModal = function(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;
  activeReadingPost = post;

  const modal = document.getElementById('view-post-modal');
  if (!modal) return;

  const categoryEl = document.getElementById('read-post-category');
  const coverEl = document.getElementById('read-post-cover');
  const titleEl = document.getElementById('read-post-title');
  const authorAvatarEl = document.getElementById('read-post-author-avatar');
  const authorNameEl = document.getElementById('read-post-author');
  const dateEl = document.getElementById('read-post-date');
  const likesEl = document.getElementById('read-post-likes');
  const contentEl = document.getElementById('read-post-content');
  const commentsCountEl = document.getElementById('read-post-comments-count');
  
  const categoryClass = post.category === 'Thông báo' ? 'thong-bao' :
                        post.category === 'Tin tức' ? 'tin-tuc' :
                        post.category === 'Văn hóa' ? 'van-hoa' : 'huong-dan';

  if (categoryEl) {
    categoryEl.textContent = post.category;
    categoryEl.className = `category-tag ${categoryClass}`;
  }
  if (coverEl) coverEl.src = post.coverImage;
  if (titleEl) titleEl.textContent = post.title;
  
  const authorEmp = employees.find(e => e.name === post.author) || employees[0];
  if (authorAvatarEl) authorAvatarEl.src = authorEmp.avatar;
  if (authorNameEl) authorNameEl.textContent = post.author;
  if (dateEl) dateEl.textContent = formatDate(post.date);
  if (likesEl) likesEl.textContent = post.likes;
  if (contentEl) contentEl.textContent = post.content;
  if (commentsCountEl) commentsCountEl.textContent = post.comments ? post.comments.length : 0;

  // Render comments list
  renderComments();

  // Populate comment author list
  populateCommentAuthorDropdown();

  modal.classList.add('active');
  lucide.createIcons();
}

// Render comments in reader
function renderComments() {
  const container = document.getElementById('comments-list');
  if (!container || !activeReadingPost) return;
  container.innerHTML = '';

  const comments = activeReadingPost.comments || [];
  if (comments.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size:0.85rem; padding: 10px 0;">Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>`;
    return;
  }

  comments.forEach(comment => {
    const emp = employees.find(e => e.name === comment.author) || employees[0];
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    commentItem.innerHTML = `
      <img src="${emp.avatar}" alt="${comment.author}" class="comment-avatar">
      <div class="comment-info">
        <div class="comment-author-row">
          <span class="comment-author">${comment.author}</span>
          <span class="comment-time">${comment.date ? formatCommentDate(comment.date) : ''}</span>
        </div>
        <p class="comment-text">${comment.text}</p>
      </div>
    `;
    container.appendChild(commentItem);
  });
}

// Helper to format comment time relative/absolute
function formatCommentDate(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now - date;
  const diffMin = Math.floor(diffMs / 60000);
  
  if (diffMin < 1) return 'Vừa xong';
  if (diffMin < 60) return `${diffMin} phút trước`;
  
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `${diffHours} giờ trước`;
  
  return formatDate(dateStr);
}

// Populate Comment author selection dropdown
function populateCommentAuthorDropdown() {
  const select = document.getElementById('comment-author-select');
  if (!select) return;
  select.innerHTML = '';
  employees.forEach(emp => {
    const opt = document.createElement('option');
    opt.value = emp.name;
    opt.textContent = emp.name;
    select.appendChild(opt);
  });
}

// Attach Like event
const likePostBtn = document.getElementById('like-post-btn');
if (likePostBtn) {
  likePostBtn.addEventListener('click', () => {
    if (activeReadingPost) {
      activeReadingPost.likes += 1;
      const likesEl = document.getElementById('read-post-likes');
      if (likesEl) likesEl.textContent = activeReadingPost.likes;
      renderBlog();
    }
  });
}

// Attach Comment submit event
const submitCommentBtn = document.getElementById('submit-comment-btn');
if (submitCommentBtn) {
  submitCommentBtn.addEventListener('click', () => {
    const textEl = document.getElementById('new-comment-text');
    const authorEl = document.getElementById('comment-author-select');
    if (!textEl || !authorEl || !activeReadingPost) return;

    const text = textEl.value.trim();
    const author = authorEl.value;

    if (!text) return;

    const newComment = {
      author: author,
      text: text,
      date: new Date().toISOString()
    };

    if (!activeReadingPost.comments) activeReadingPost.comments = [];
    activeReadingPost.comments.push(newComment);
    textEl.value = '';

    renderComments();
    const countEl = document.getElementById('read-post-comments-count');
    if (countEl) countEl.textContent = activeReadingPost.comments.length;
    renderBlog();
  });
}

// Close Reader Modal event
const viewPostCloseBtn = document.getElementById('view-post-close-btn');
if (viewPostCloseBtn) {
  viewPostCloseBtn.addEventListener('click', () => {
    document.getElementById('view-post-modal').classList.remove('active');
    activeReadingPost = null;
  });
}

// Write Post Modal actions
const writePostBtn = document.getElementById('write-post-btn');
const addPostModal = document.getElementById('add-post-modal');
const postModalClose = document.getElementById('post-modal-close-btn');
const postModalCancel = document.getElementById('post-modal-cancel-btn');
const postForm = document.getElementById('post-form');

if (writePostBtn && addPostModal) {
  writePostBtn.addEventListener('click', () => {
    // Populate author select
    const authorSelect = document.getElementById('post-author');
    if (authorSelect) {
      authorSelect.innerHTML = '';
      employees.forEach(emp => {
        const opt = document.createElement('option');
        opt.value = emp.name;
        opt.textContent = emp.name;
        authorSelect.appendChild(opt);
      });
    }
    addPostModal.classList.add('active');
  });
}

function closePostModal() {
  if (addPostModal) {
    addPostModal.classList.remove('active');
    postForm.reset();
    const customGroup = document.getElementById('post-custom-cover-group');
    if (customGroup) customGroup.style.display = 'none';
  }
}

if (postModalClose) postModalClose.addEventListener('click', closePostModal);
if (postModalCancel) postModalCancel.addEventListener('click', closePostModal);

// Toggle custom cover input
const postCoverSelect = document.getElementById('post-cover-select');
if (postCoverSelect) {
  postCoverSelect.addEventListener('change', (e) => {
    const customGroup = document.getElementById('post-custom-cover-group');
    if (customGroup) {
      if (e.target.value === 'custom') {
        customGroup.style.display = 'block';
        const customInput = document.getElementById('post-custom-cover');
        if (customInput) customInput.required = true;
      } else {
        customGroup.style.display = 'none';
        const customInput = document.getElementById('post-custom-cover');
        if (customInput) customInput.required = false;
      }
    }
  });
}

// Add post Form Submit
if (postForm) {
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('post-title').value;
    const category = document.getElementById('post-category').value;
    const author = document.getElementById('post-author').value;
    const coverType = document.getElementById('post-cover-select').value;
    const summary = document.getElementById('post-summary').value;
    const content = document.getElementById('post-content').value;

    let coverImage = '';
    if (coverType === 'tech') {
      coverImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800';
    } else if (coverType === 'office') {
      coverImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800';
    } else if (coverType === 'team') {
      coverImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800';
    } else {
      coverImage = document.getElementById('post-custom-cover').value || 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800';
    }

    const newPost = {
      id: Date.now(),
      title,
      category,
      author,
      summary,
      content,
      coverImage,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      status: 'Đã xuất bản',
      comments: []
    };

    posts.unshift(newPost);
    renderBlog();
    closePostModal();
  });
}

// Toggle grid / table views
const blogGridViewBtn = document.getElementById('blog-grid-view-btn');
const blogTableViewBtn = document.getElementById('blog-table-view-btn');

if (blogGridViewBtn && blogTableViewBtn) {
  blogGridViewBtn.addEventListener('click', () => {
    blogViewMode = 'grid';
    blogGridViewBtn.classList.add('active');
    blogTableViewBtn.classList.remove('active');
    renderBlog();
  });

  blogTableViewBtn.addEventListener('click', () => {
    blogViewMode = 'table';
    blogTableViewBtn.classList.add('active');
    blogGridViewBtn.classList.remove('active');
    renderBlog();
  });
}

// Attach filter change and search input listeners
const blogCategoryFilterEl = document.getElementById('blog-category-filter');
const blogSearchInputEl = document.getElementById('blog-search-input');

if (blogCategoryFilterEl) {
  blogCategoryFilterEl.addEventListener('change', (e) => {
    blogCategoryFilter = e.target.value;
    renderBlog();
  });
}

if (blogSearchInputEl) {
  blogSearchInputEl.addEventListener('input', (e) => {
    blogSearchQuery = e.target.value;
    renderBlog();
  });
}

