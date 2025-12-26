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
    const savedState = localStorage.getItem('budgetPlanner');

    if (savedState) {
      state = JSON.parse(savedState);

      state.transactions.forEach(trans => {
        trans.date = new Date(trans.date);
      });

      state.goals.forEach(goal => {
        goal.date = new Date(goal.date);
      });
    }
  }
 //save data to localstorage
 function saveData() {
  const transactionsWithStringDates = state.transactions.map(trans => ({
    ...trans,
    date: trans.date.toISOString()
  }));

const goalsWithStringDates=state.goals.map(goal=>({...goal,
  date:goal.date.toISOString()
}));
const StateToSave={
  ...state,
  transaction:transactionsWithStringDates,
  goals:goalsWithStringDates
};
localStorage.setItem('budgetPlannerState',JSON.stringify(stateToSave))

}
function setupEventListeners(){
  themeToggle.addEventListener('click',toggletheme);
  //Navigation

  navItems.forEach(item=>{
    item.addEventListener('click',()=>
    {
navItems.forEach(nav=>nav.classList.remove('active'));
navItems.classList.add('active');
const section=navItems.getAttribute('data-section')
contentSections.forEach(sec=>sec.classList.remove('active'));
document.getElementById(section).classList.add('active');
if(section=='transaction'){
  renderTransactionTable();
}
else if(section=='budget'){
  renderCategories();
}
else if(Section=='reports'){
  renderCharts();
}
else if(section=='goals'){
  rederGoals();
}
    }
    );
  });
addTransactionBtn.addEventListener('click',()=>openModal('transaction'));
addCategoryBtn.addEventListener('click',()=>
openModal('category'));
addGoalBtn.addEventListener('click',()=>openModal("goal"));
//ModalClose Buttons

closeModalBtns.forEach(btn=>{
  btn.addEventListener("click",closeModal);
});
window.addEventListener('click',(e)=>{
  if (e.target.classlist.contains('modal'))
  {
    closeModal()
  }
});

// FormSubmission
transactionForm.addEventListener('submit',handleTransactionSubmit);
categoryForm.addEventListener('submit',handleCategorySubmit);
goalForm.addEventListener('submit',handleGoalSubmit);

//Report periodNavigation
document.getElementById('prev-month').addEventListener('click',()=>{
  if (state.currentMonth===0){
    state.currentMonth=11;
    state.currentYear--;


  }
  else{
    state.currentMonth--;
  }
  setCurrentMonthYear();
  renderCharts();
});
document.getElementById('transaction-type').addEventListener('change',renderTransactionTable);
document.getElementById('transaction-category').addEventListener('change', renderTransactionsTable);
        document.getElementById('transaction-month').addEventListener('change', renderTransactionsTable);
    }

function toggleTheme(){
  const body=document.body;
  if(body.getAttribute('data-theme')=='dark'){
    body.removeAttribute('data-theme');
    themeToggle.classList.remove('fa-sun')
    themeToggle.classList.add("fa-moon")
  }
  else{
    body.setAttribute('data-theme','dark');
    themeToggle.classList.remove('fa-moon')
    themeToggle.classList.add('fa-sun');
  }
}
