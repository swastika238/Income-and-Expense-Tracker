document.addEventListener('DOMContentLoaded', function () {

  const themeToggle = document.getElementById('theme-icon');
  const navItems = document.querySelectorAll('.main-nav-li');
  const contentSections = document.querySelectorAll('.content-section');

  const transactionModal = document.getElementById('transaction-modal');
  const categoryModal = document.getElementById('category-modal');
  const goalModal = document.getElementById('goal-modal');

  const addCategoryBtn = document.getElementById('add-category');
  const addGoalBtn = document.getElementById('add-goal');

  // Form Elements
  const transactionForm = document.getElementById('transaction-form');
  const categoryForm = document.getElementById('category-form');
  const goalForm = document.getElementById('goal-form');

  let state = {
    transactions: [],
    categories: [
      { id: 1, name: 'Food', budget: 300, icon: 'fa-utensils', color: '#FF6384' },
      { id: 2, name: 'Transportation', budget: 150, icon: 'fa-car', color: '#36A2EB' },
      { id: 3, name: 'Housing', budget: 1000, icon: 'fa-home', color: '#FFCE56' },
      { id: 4, name: 'Entertainment', budget: 100, icon: 'fa-film', color: '#4BC0C0' },
      { id: 5, name: 'Shopping', budget: 200, icon: 'fa-shopping-cart', color: '#9966FF' },
      { id: 6, name: 'Income', budget: 0, icon: 'fa-money-bill-wave', color: '#00CC99' }
    ],
    goals: [],
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear()
  };

  function init() {
    loadData();
    setupEventListeners();
    renderDashboard();
    renderCategories();
    updateSummaryCards();
    renderRecentTransactions();
    renderTransactionTable();
    renderChart();
    setCurrentMonthYear();
  }

  function loadData() {


  init();
});
