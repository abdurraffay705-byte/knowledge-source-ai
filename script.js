document.addEventListener('DOMContentLoaded', () => {
    // 0. Auth Guard (Mock)
    if (localStorage.getItem('knowledgeSourceAuth') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // 1. Navigation Logic
    const sidebarItems = document.querySelectorAll('.sidebar-nav li[data-section]');
    const contentSections = document.querySelectorAll('.content-section');

    sidebarItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');

            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });

            if (window.lucide) {
                window.lucide.createIcons();
            }
        });
    });

    // 2. Search Logic (Call Logs and Knowledge Base)
    const searchInputs = document.querySelectorAll('.search-box input, .search-container input');
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const activeSection = document.querySelector('.content-section.active');
            const rows = activeSection.querySelectorAll('.data-table tbody tr');

            rows.forEach(row => {
                const text = row.innerText.toLowerCase();
                row.style.display = text.includes(term) ? '' : 'none';
            });
        });
    });

    // 3. Filter Chips Logic (Call Logs)
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const filterValue = chip.innerText.toLowerCase();
            const rows = document.querySelectorAll('#call-logs .data-table tbody tr');

            rows.forEach(row => {
                if (filterValue === 'all') {
                    row.style.display = '';
                    return;
                }
                const status = row.querySelector('.status-pill').innerText.toLowerCase();
                row.style.display = status === filterValue ? '' : 'none';
            });
        });
    });

    // 4. Tab Logic (Knowledge Base)
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(tab => {
        tab.addEventListener('click', () => {
            tabButtons.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // In a real app, this would filter tab content
            console.log(`Switched to tab: ${tab.innerText}`);
        });
    });

    // 5. Dynamic Metrics Simulation
    const metricValues = document.querySelectorAll('.metric-value');
    setInterval(() => {
        metricValues.forEach(value => {
            // Subtle pulse to indicate "live" data
            value.style.transition = 'color 0.5s ease-in-out';
            value.style.color = 'var(--primary)';
            setTimeout(() => {
                value.style.color = '';
            }, 1000);
        });
    }, 5000);

    // 6. Button Click Feedbacks
    const buttons = document.querySelectorAll('.btn, .icon-btn, .page-btn, .edit-link');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.tagName === 'A' && btn.getAttribute('href') === '#') e.preventDefault();
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });

    // 7. Logout Logic
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('knowledgeSourceAuth');
            window.location.href = 'login.html';
        });
    }

    // Initialize Lucide
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// Animation helper
const globalStyle = document.createElement('style');
globalStyle.textContent = `
    @keyframes pulse-soft {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.02); opacity: 0.9; }
        100% { transform: scale(1); opacity: 1; }
    }
    .metric-value.live {
        animation: pulse-soft 2s infinite ease-in-out;
    }
`;
document.head.appendChild(globalStyle);
