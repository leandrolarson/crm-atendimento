/**
 * CRM Atendimento & Vendas - Lead Manager Logic
 * Filtros, pesquisa dinâmica e modal de exclusão conforme US06
 */

let activeLeadToDelete = null;

function filterLeadsTable() {
  const searchInput = document.getElementById('searchLeadInput');
  const channelFilter = document.getElementById('filterChannel');
  const repFilter = document.getElementById('filterRep');
  const stageFilter = document.getElementById('filterStage');
  const priorityFilter = document.getElementById('filterPriority');

  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
  const selectedChannel = channelFilter ? channelFilter.value.toLowerCase() : '';
  const selectedRep = repFilter ? repFilter.value.toLowerCase() : '';
  const selectedStage = stageFilter ? stageFilter.value.toLowerCase() : '';
  const selectedPriority = priorityFilter ? priorityFilter.value.toLowerCase() : '';

  const rows = document.querySelectorAll('#leadsTableBody tr');
  let visibleCount = 0;

  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    const channel = (row.getAttribute('data-channel') || '').toLowerCase();
    const rep = (row.getAttribute('data-rep') || '').toLowerCase();
    const stage = (row.getAttribute('data-stage') || '').toLowerCase();
    const priority = (row.getAttribute('data-priority') || '').toLowerCase();

    const matchesQuery = !query || text.includes(query);
    const matchesChannel = !selectedChannel || channel === selectedChannel;
    const matchesRep = !selectedRep || rep.includes(selectedRep);
    const matchesStage = !selectedStage || stage === selectedStage;
    const matchesPriority = !selectedPriority || priority === selectedPriority;

    if (matchesQuery && matchesChannel && matchesRep && matchesStage && matchesPriority) {
      row.classList.remove('d-none');
      visibleCount++;
    } else {
      row.classList.add('d-none');
    }
  });

  const countBadge = document.getElementById('visibleCountBadge');
  if (countBadge) {
    countBadge.textContent = `Exibindo ${visibleCount} de ${rows.length} chamados`;
  }
}

function clearFilters() {
  const searchInput = document.getElementById('searchLeadInput');
  const channelFilter = document.getElementById('filterChannel');
  const repFilter = document.getElementById('filterRep');
  const stageFilter = document.getElementById('filterStage');
  const priorityFilter = document.getElementById('filterPriority');

  if (searchInput) searchInput.value = '';
  if (channelFilter) channelFilter.value = '';
  if (repFilter) repFilter.value = '';
  if (stageFilter) stageFilter.value = '';
  if (priorityFilter) priorityFilter.value = '';

  filterLeadsTable();
}

function openDeleteModal(leadId, leadName) {
  activeLeadToDelete = leadId;
  const leadNameElem = document.getElementById('deleteLeadNameSpan');
  if (leadNameElem) leadNameElem.textContent = leadName;

  const deleteModalElem = document.getElementById('deleteConfirmModal');
  if (deleteModalElem && window.bootstrap) {
    const modal = new bootstrap.Modal(deleteModalElem);
    modal.show();
  }
}

function confirmDeleteLead() {
  if (activeLeadToDelete) {
    const row = document.getElementById(`lead-row-${activeLeadToDelete}`);
    if (row) {
      row.remove();
    }
    const deleteModalElem = document.getElementById('deleteConfirmModal');
    if (deleteModalElem && window.bootstrap) {
      const modal = bootstrap.Modal.getInstance(deleteModalElem);
      if (modal) modal.hide();
    }
    filterLeadsTable();
    showToast('Chamado excluído com sucesso.');
    activeLeadToDelete = null;
  }
}

function showToast(message) {
  const toastMsg = document.getElementById('actionToastMsg');
  const toastElem = document.getElementById('actionToast');
  if (toastMsg) toastMsg.textContent = message;
  if (toastElem && window.bootstrap) {
    const toast = new bootstrap.Toast(toastElem);
    toast.show();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchLeadInput');
  const channelFilter = document.getElementById('filterChannel');
  const repFilter = document.getElementById('filterRep');
  const stageFilter = document.getElementById('filterStage');
  const priorityFilter = document.getElementById('filterPriority');
  const btnClear = document.getElementById('btnClearFilters');
  const btnConfirmDelete = document.getElementById('btnConfirmDelete');

  if (searchInput) searchInput.addEventListener('input', filterLeadsTable);
  if (channelFilter) channelFilter.addEventListener('change', filterLeadsTable);
  if (repFilter) repFilter.addEventListener('change', filterLeadsTable);
  if (stageFilter) stageFilter.addEventListener('change', filterLeadsTable);
  if (priorityFilter) priorityFilter.addEventListener('change', filterLeadsTable);
  if (btnClear) btnClear.addEventListener('click', clearFilters);
  if (btnConfirmDelete) btnConfirmDelete.addEventListener('click', confirmDeleteLead);
});
