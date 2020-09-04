from flask import Flask, render_template, url_for

app = Flask(__name__)

# Tələbələr modulu


@app.route('/')
@app.route('/candidates')
def candidate():
    return render_template("students/candidates.html", title="Namizədlər")


@app.route('/students')
def students():
    return render_template("students/students.html", title="Tələbələr")


@app.route('/left')
def left():
    return render_template("students/left.html", title="Ləğv edənlər")


@app.route('/canceled')
def canceled():
    return render_template("students/canceled.html", title="Ləğv olunanlar")


@app.route('/graduates')
def graduates():
    return render_template("students/graduates.html", title="Məzunlar")

# Ödəmələr modulu


@app.route('/all_payments')
def all_payments():
    return render_template("payments/all_payments.html", title="Bütün Ödəmələr")


@app.route('/active_payments')
def active_payments():
    return render_template("payments/active_payments.html", title="Aktiv Ödəmələr")


@app.route('/monthly_payments')
def monthly_payments():
    return render_template("payments/monthly_payments.html", title="Aylıq Ödəmələr")


@app.route('/monthly_payments_1')
def monthly_payments_1():
    return render_template("payments/monthly_payments_1.html", title="Aylıq Ödəmələr")

# Qiymətləndirmə modulu


@app.route('/students_evaluation')
def students_evaluation():
    return render_template("evaluation/students_evaluation.html", title="Tələbələr")

app.run(debug=True)
