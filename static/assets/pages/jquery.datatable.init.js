/**
 * Theme: Metrica - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Datatables Js
 */


$(document).ready(function () {
    $('#datatable').DataTable();

    $(document).ready(function () {
        $('#datatable2').DataTable();
    });

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'colvis']
    });

    table.buttons().container()
        .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');

    $('#row_callback').DataTable({
        "createdRow": function (row, data, index) {
            if (data[5].replace(/[\$,]/g, '') * 1 > 150000) {
                $('td', row).eq(5).addClass('highlight');
            }
        }
    });

});

/* Tələbələr - page JQuery */
function format(d) {
    return '<table class="table-gray col-12" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Tələbə:</td>' +
        '<td class="bg-light">' + d.full_name + '</td>' +

        '<td>Ailə vəziyyəti:</td>' +
        '<td class="bg-light">' + d.familyState + '</td>' +

        '<td>İş vəziyyəti:</td>' +
        '<td class="bg-light">' + d.workState + '</td>' +
        '</tr>' +
        '<tr>' +

        '<td>Şəxsiyyət vəsiqəsinin nömrəsi:</td>' +
        '<td class="bg-light">' + d.id + '</td>' +

        '<td>Ali təhsil durumu:</td>' +
        '<td class="bg-light">' + d.educationState + '</td>' +

        '<td>FIN:</td>' +
        '<td class="bg-light">' + d.fin + '</td>' +

        '</tr>' +
        '</table>' +
        '<div class="col-12 pt-3 d-flex justify-content-end bg-light">' +
        '<button type="button" class="btn btn-gradient-success waves-effect waves-light float-right mb-3 mr-3 col-3" data-toggle="modal" data-animation="bounce" data-target=".bs-badge-modal-lg" > Təhsil keçmişi </button>' +
        '<button type="button" class="btn btn-gradient-warning  waves-effect waves-light float-right mb-3 mr-3 col-3" data-toggle="modal" data-animation="bounce" data-target="#student-payment-modal" > Ödəniş keçmişi </button>' +
        '<a href="#" class="mr-2 pt-1" data-toggle="modal" data-animation="bounce" data-target="#student-edit-modal">' +
        '<i class="fas fa-edit text-primary font-24"></i>' +
        '</a>' +
        '</div>';
}

$(document).ready(function () {
    var table = $('#child_rows').DataTable(
        {
            "data": testdata.data,
            select: "single",
            "columns": [
                {
                    "className": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "name" },
                { "data": "surname" },
                { "data": "email" },
                { "data": "phone" },
                { "data": "shift" },
                { "data": "date" }
            ],
            "order": [[1, 'asc']]
        });

    // Add event listener for opening and closing details
    $('#child_rows tbody').on('click', 'td.details-control',
        function () {
            var tr = $(this).closest('tr');
            var row = table.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            }
            else {
                // Open this row
                row.child(format(row.data())).show();
                tr.addClass('shown');
            }
        });
});

var testdata = {
    "data":
        [
            {
                "name": "Mahmud",
                "surname": "Qəribov",
                "email": "mahmood.garibov@gmail.com",
                "phone": "0702568952",
                "shift": "Qrup - 01",
                "date": "01/08/2020",
                "full_name": "Mahmud Qəribov Elçin",
                "id": "AZ199999",
                "familyState": "Evli",
                "workState": "Işsiz",
                "educationState": "Ali",
                "fin": "0esad9",
            },
            {
                "name": "Tarlan",
                "surname": "Soltanov",
                "email": "soltanov.tarlan04@gmail.com",
                "phone": "0503856974",
                "shift": "Qrup - 04",
                "date": "01/08/2020",
                "full_name": "Tarlan Soltanov Laçın",
                "id": "AZ199999",
                "familyState": "Subay",
                "workState": "Işsiz",
                "educationState": "Orta",
                "fin": "0esad9",
            },
        ]
}




/* Ləğv edənlər - page JQuery */
function toggler(d) {
    // `d` is the original data object for the row
    return '<table class="table-gray col-12" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Ləğv etmə səbəbi:</td>' +
        '<td class="bg-light">' + d.reason + '</td>' +
        '</tr>' +
        '</table>' +
        '<div class="col-12 pt-3 d-flex justify-content-end bg-light">' +
        '<button type="button" class="btn btn-gradient-success waves-effect waves-light float-right mb-3 mr-3 col-3" data-toggle="modal" data-animation="bounce" data-target="" > Təhsil keçmişi </button>' +
        '<button type="button" class="btn btn-gradient-warning  waves-effect waves-light float-right mb-3 mr-3 col-3" data-toggle="modal" data-animation="bounce" data-target="#left-payment-modal" > Ödəniş keçmişi </button>' +
        '<a href="#" class="mr-2 pt-1" data-toggle="modal" data-animation="bounce" data-target="#edit-left-student-modal">' +
        '<i class="fas fa-edit text-primary font-24"></i>' +
        '</a>' +
        '</div>';
}

$(document).ready(function () {
    var table = $('#left_datatable').DataTable({
        // "ajax": "../../plugins/datatables/objects.txt",
        "data": exitdata.data,
        select: "single",
        "columns": [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "surname" },
            { "data": "email" },
            { "data": "phone" },
            { "data": "reg_date" },
            { "data": "exit_date" }
        ],
        "order": [[1, 'asc']]
    });

    // Add event listener for opening and closing details
    $('#left_datatable tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(toggler(row.data())).show();
            tr.addClass('shown');
        }
    });
});

var exitdata = {
    "data": [
        {
            "name": "Mahmud",
            "surname": "Qəribov",
            "email": "mahmood.garibov@gmail.com",
            "phone": "0702568952",
            "reg_date": "01/08/2020",
            "exit_date": "01/08/2020",
            "reason": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            "name": "Tarlan",
            "surname": "Soltanov",
            "email": "soltanov.tarlan04@gmail.com",
            "phone": "0503856974",
            "reg_date": "01/08/2020",
            "exit_date": "01/08/2020",
            "reason": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ]
}





/* Ləğv olunanlar - page JQuery */
function open(d) {
    // `d` is the original data object for the row
    return '<table class="table-gray col-12" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Ləğv olunma səbəbi:</td>' +
        '<td class="bg-light">' + d.reason + '</td>' +
        '</tr>' +
        '</table>' +
        '<div class="col-12 pt-3 d-flex justify-content-end bg-light">' +
        '<button type="button" class="btn btn-gradient-success waves-effect waves-light float-right mb-3 mr-3 col-3" data-toggle="modal" data-animation="bounce" data-target="" > Təhsil keçmişi </button>' +
        '<button type="button" class="btn btn-gradient-warning  waves-effect waves-light float-right mb-3 mr-3 col-3" data-toggle="modal" data-animation="bounce" data-target="#canceled-payment-modal" > Ödəniş keçmişi </button>' +
        '<a href="#" class="mr-2 pt-1" data-toggle="modal" data-animation="bounce" data-target="#edit-canceled-student-modal">' +
        '<i class="fas fa-edit text-primary font-24"></i>' +
        '</a>' +
        '</div>';
}

$(document).ready(function () {
    var table = $('#canceled_datatable').DataTable({
        // "ajax": "../../plugins/datatables/objects.txt",
        "data": canceldata.data,
        select: "single",
        "columns": [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "surname" },
            { "data": "email" },
            { "data": "phone" },
            { "data": "reg_date" },
            { "data": "exit_date" }
        ],
        "order": [[1, 'asc']]
    });

    // Add event listener for opening and closing details
    $('#canceled_datatable tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(open(row.data())).show();
            tr.addClass('shown');
        }
    });
});

var canceldata = {
    "data": [
        {
            "name": "Mahmud",
            "surname": "Qəribov",
            "email": "mahmood.garibov@gmail.com",
            "phone": "0702568952",
            "reg_date": "01/08/2020",
            "exit_date": "01/08/2020",
            "reason": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "name": "Tarlan",
            "surname": "Soltanov",
            "email": "soltanov.tarlan04@gmail.com",
            "phone": "0503856974",
            "reg_date": "01/08/2020",
            "exit_date": "01/08/2020",
            "reason": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ]
}






/* Məzunlar - page JQuery */
function infor(d) {
    // `d` is the original data object for the row
    return '<table class="table-gray col-12" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Tələbə:</td>' +
        '<td class="bg-light">' + d.full_name + '</td>' +
        '<td>İş yeri:</td>' +
        '<td class="bg-light">' + d.working + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Müəllim:</td>' +
        '<td class="bg-light">' + d.teacher + '</td>' +
        '<td>Maaşı:</td>' +
        '<td class="bg-light">' + d.salary + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>İxtisaslaşma: </td>' +
        '<td class="bg-light">' + d.profesional + '</td>' +
        '<td>Ali təhsil:</td>' +
        '<td class="bg-light">' + d.university + '</td>' +
        '</tr>' +
        '</table>' +
        '<div class="col-12 pt-3 d-flex justify-content-end bg-light">' +
        '<button type="button" class="btn btn-gradient-success waves-effect waves-light float-right mb-3 mr-3 col-3" data-toggle="modal" data-animation="bounce" data-target="" > Təhsil keçmişi </button>' +
        '<button type="button" class="btn btn-gradient-warning  waves-effect waves-light float-right mb-3 mr-3 col-3" data-toggle="modal" data-animation="bounce" data-target="#graduate-payment-modal" > Ödəniş keçmişi </button>' +
        '<a href="#" class="mr-2 pt-1" data-toggle="modal" data-animation="bounce" data-target="#edit-graduate-student-modal">' +
        '<i class="fas fa-edit text-primary font-24"></i>' +
        '</a>' +
        '</div>';
}

$(document).ready(function () {
    var table = $('#graduation_rows').DataTable({
        // "ajax": "../../plugins/datatables/objects.txt",
        "data": graduatedata.data,
        select: "single",
        "columns": [{
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": ''
        },
        { "data": "name" },
        { "data": "surname" },
        { "data": "email" },
        { "data": "phone" },
        { "data": "date" },
        ],
        "order": [
            [1, 'asc']
        ]
    });

    // Add event listener for opening and closing details
    $('#graduation_rows tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(infor(row.data())).show();
            tr.addClass('shown');
        }
    });
});

var graduatedata = {
    "data": [{
        "name": "Mahmud",
        "surname": "Qəribov",
        "email": "mahmood.garibov@gmail.com",
        "phone": "0702568952",
        "working": "Pragmatech Dev and Education",
        "salary": "1200AZN",
        "date": "01/12/2020",
        "full_name": "Mahmud Qəribov Elçin",
        "teacher": "Samir Kərimov",
        "university": "Oxuyur",
        "profesional": "<span class=\"badge badge-md badge-soft-danger\">JS React</span>"
    },
    {
        "name": "Tarlan",
        "surname": "Soltanov",
        "email": "tarlster@gmail.com",
        "phone": "0703333333",
        "working": "Google Inc.",
        "salary": "12700AZN",
        "date": "04/11/2020",
        "full_name": "Tarlan Soltanov Lacin",
        "teacher": "Samir Kərimov",
        "university": "Yoxdur",
        "profesional": "<span class=\"badge badge-md badge-soft-info\">C# ASP.NET</span>"

    },
    {
        "name": "Rubabe",
        "surname": "Sabanova",
        "email": "ruby@gmail.com",
        "phone": "0705555555",
        "working": "Data analytics, excel sheets and Lots of fun Inc",
        "salary": "1000AZN",
        "date": "29/11/2020",
        "full_name": "Rubabe Sabanova",
        "teacher": "Samir Kərimov",
        "university": "Oxuyur",
        "profesional": "<span class=\"badge badge-md badge-soft-warning\">Python Django</span>"

    },
    {
        "name": "Ulvi",
        "surname": "Najafli",
        "email": "ulvien@gmail.com",
        "phone": "0707777777",
        "working": "Samir's Fehle",
        "salary": "1100AZN",
        "date": "01/08/2020",
        "full_name": "Mahmud Qəribov Elçin",
        "teacher": "Samir Kərimov",
        "university": "Var",
        "profesional": "<span class=\"badge badge-md badge-soft-info\">C# ASP.NET</span>"

    }
    ]
}




/* Qiymətləndirmə cədvəli*/
function week(d) {
    // `d` is the original data object for the row
    return '<table class="table-gray col-12" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<div class="col-12 pt-3 d-flex justify-content-around bg-light">' +
        
        '<button type="button" class="btn btn-gradient-primary waves-effect waves-light float-right mb-3 col-2" data-toggle="modal" data-animation="bounce" data-target=".bs-info-modal-lg" > Tapşırıq </button>' +
        '<button type="button" class="btn btn-gradient-success waves-effect waves-light float-right mb-3 col-2" data-toggle="modal" data-animation="bounce" data-target=".bs-apply-modal-lg" > Məqalə </button>' +
        '<button type="button" class="btn btn-gradient-warning waves-effect waves-light float-right mb-3 col-2" data-toggle="modal" data-animation="bounce" data-target=".bs-payment-modal-lg" > Alqoritm </button>' +
        '<button type="button" class="btn btn-gradient-info waves-effect waves-light float-right mb-3 col-2" data-toggle="modal" data-animation="bounce" data-target=".bs-badge-modal-lg" > Layihə</button>' +
        
        '</div>';
}

$(document).ready(function () {
    var table = $('#evaluation').DataTable({
        "data": weekdata.data,
        select: "single",
        "columns": [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "email" },
            { "data": "phone" },
            { "data": "status" },
            { "data": "github" },
            { "data": "medium" },
            { "data": "hackerrank" }
        ],
        "order": [[1, 'asc']]
    });

    // Add event listener for opening and closing details
    $('#evaluation tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(week(row.data())).show();
            tr.addClass('shown');
        }
    });
});

var weekdata = {
    "data": [
        {
            "name": "Mahmud Qəribov",
            "email": "mahmood.garibov@gmail.com",
            "phone": "0702568952",
            "status": "<span class=\"badge badge-md badge-soft-success\">Active</span>",
            "github": "<a href=\"https://github.com/\" target=\"_blank\"><i class=\"mdi mdi-github-circle d-flex justify-content-center\" style=\"font-size: 23px;\"></i></a>" ,
            "medium": "<a href=\"https://github.com/\" target=\"_blank\"><i class=\"fab fa-medium  d-flex justify-content-center\" style=\"font-size: 23px;\"></i></a>",
            "hackerrank": "<a href=\"https://www.hackerrank.com/\" target=\"_blank\"><i class=\"fab fa-hackerrank d-flex justify-content-center\" style=\"font-size: 23px;\"></i></a>",
            
        },
        {
            "name": "Tarlan Soltanov",
            "email": "soltanov.tarlan04@gmail.com",
            "phone": "0503856974",
            "status": "<span class=\"badge badge-md badge-soft-danger\">Deactive</span>",
            "github": "<a href=\"https://github.com/\" target=\"_blank\"><i class=\"mdi mdi-github-circle d-flex justify-content-center\" style=\"font-size: 23px;\"></i></a>" ,
            "medium": "<a href=\"https://github.com/\" target=\"_blank\"><i class=\"fab fa-medium  d-flex justify-content-center\" style=\"font-size: 23px;\"></i></a>",
            "hackerrank": "<a href=\"https://www.hackerrank.com/\" target=\"_blank\"><i class=\"fab fa-hackerrank d-flex justify-content-center\" style=\"font-size: 23px;\"></i></a>",
            
        },
    ]
}


