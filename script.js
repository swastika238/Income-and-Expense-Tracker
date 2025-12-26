document.addEventListener('DOMContentLoaded',function()
{
  const themeToggle=document.getElementsById('theme-icone');
  const navItem=document.querySelectionAll('.main-nav-li');
  const contentSections=document.querySelectorAll(".content-section");
  const transactionModal=document.getElementById('transaction');
  const categoryModel=document.getElementById('categoy-Model');
  const goalModal=document.getElementById('goal-model');
  const addTransaction=document.getElementById('add -category');
  const addGoalBtn=document.getElementById('add-goal');


  //Form Element
  const transactionForm=document.getElementById('transaction-form');
  const categoryForm=document.getElementById('category-form');
  const goalForm=document.getElementById('goal-Form');
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
   currentMonth:newDate().getMonth(),
   currentYear:newDate().getYear(),
};
function init()
{
  loadData();
  setupEventListeners();
  renderDashboard();
  renderCategories();
  updateSummaryCards();
  renderRecentTransaction();
  renderTransactionTable();
  renderchart();
  setCurrentMonthYear();
}
function loadData(){
  const saved
}

})