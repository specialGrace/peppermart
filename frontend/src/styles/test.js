//----------------------------
//Approve or Reject handler
//----------------------------

function approval(action) {
  swal({
    title: 'Transport Expense Reimbursement Process',
    text: 'Are you sure you want to ' + action + ' this request?',
    type: 'warning',
    allowOutsideClick: true,
    allowEscapeKey: true,
    showConfirmButton: true,
    confirmButtonColor: '#1FBC99',
    confirmButtonText: 'YES',
    showCancelButton: true,
    cancelButtonColor: '#E4655F',
    cancelButtonText: 'NO',
  })
}

//APPROVE button...
$('#fo_approved')
  .find('button')
  .on('click', function (e) {
    e.preventDefault()
    //check affirmation has been done
    if ($('#hr_Affirmation').getValue() == '0') {
      swal({
        title: 'Transport Expense Reimbursement Process',
        text:
          'Please affirm that you have successfully Disburded this payment before submitting. You cannot continue until you do so',
        type: 'error',
        allowOutsideClick: true,
        allowEscapeKey: true,
        showConfirmButton: true,
        confirmButtonText: 'OK',
      })

      //Checking if the receipt number is not provided

      return false
    }

    //Checking if the receipt number is not provided

    if ($('#transaction_reference_number').getValue() == '0') {
      swal({
        title: 'Transport Expense Reimbursement Process',
        text:
          'Please ensure you provide the transaction receipt number before submitting. You cannot continue until you do so',
        type: 'error',
        allowOutsideClick: true,
        allowEscapeKey: true,
        showConfirmButton: true,
        confirmButtonText: 'OK',
      })

      return false
    }

    return approval('APPROVE')
  })

$('fo_approved').find('button').attr('disabled', true)
