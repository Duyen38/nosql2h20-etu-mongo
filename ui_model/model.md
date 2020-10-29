# ������ ������ NoSql
## 1. ����������� �������������
����������� ������������� ������ �������� �� ������� 1
������� 1 � ����������� ������������� ������ ������ � mongodb.
## 2. �������� ���������, ����� ������ � ���������
### ������ ������� �� 4 ���������
1)	��������� (F � ���������� �����������) 62� + 12� * K
�	�_id�: objectId � �������������, 12�
�	�name�: String � �������� ����������, 50 * 1�
�	�departments�: objectId[] � ������ ������, ���������� ������ * 12�
2)	������� (K � ���������� ������) 62� + 12� * E
�	�id�: objectId - �������������, 12�
�	�name�: String � �������� �������, 50 * 1�
�	�employees�: objectId[] � ������ ���������� �������, ���������� ���������� ������� * 12�
3)	���������� (D � ���������� ���������) 62�
�	�id�: objectId � �������������, 12�
�	�name�: String � �������� ����������, 50 * 1�
4)	��������� (E � ���������� �����������) 1162� + 12� * D
�	�id�: objectId � �������������, 12�
�	�name�: String � ��� ����������, 50 * 1�
�	�email�: String � ����� ����������, 25 * 1�
�	�degree�: String � ������ ������� ����������, 50 * 1�
�	�area_of_interest�: String � ������� ���������������� ���������, 500 * 1� 
�	�scientific_works�: String � ������� ������, 500 * 1�
�	�position�: String � ��������� �� �������, 25 * 1�
�	�disciplines�: objectId[] � ������ ���������� ���������, ���������� ��������� * 12�
## 3.	������ ���������� ������
����������� � ���� ������ ��������� F �����������, K ������, D ��������� � E �����������.
����� ������ ����� ����� �����: (62� + 12� * K) * F + (62� + 12� * E) * K + 62� * D + (1162� + 12� * D) * E
����������� ����� �����: (122� + 15� * K) * F + (100� + 15� * �) * K + (791� + 15� *D) * E + 128� * D 
������������ ������:
((122� + 15� * K) * F + (100� + 15� * �) * K + (791� + 15� *D) * E + 128� * D) / ((62� + 12� * K) * F + (62� + 12� * E) * K + 62� * D + (1162� + 12� * D) * E)
## 4.	������� ��������
//������� ��������
db.disciplines.insertOne({"name": "���������� ������������ ����������� �������������� ������"}) � 1 ������ ��� ���������� ������ � ������� Discipline, 3 ��� Employee, ��� ��� �� ���������� � �������� Department � Discipline. �� ���������� ������ �� �������
//����� ��������
db.employees.find({name: "������ �������"}, {position: �������}) 1 ������ ��� ���������
# ������ ������ Sql
## 1.	����������� �������������
����������� ������������� ������ ������ MySql �������� �� ���. 2
������� 2 � ����������� ������������� ������ ������ � mySql.
## 2.	�������� ���������, ����� ������ � ���������
���� ������� 4 ������� ���������� mongodb. ������� Faculty, Department, Employee � Discipline.
1)	��������� (F � ���������� �����������) 54�
�	Id: Int � �������������, 4�
�	Name: String � �������� ����������, 50 * 1�
2)	������� (K � ���������� ������) 54�
�	Id: Int � �������������, 4�
�	Name: String � �������� �������, 50 * 1�
3)	���������� (D � ���������� ���������) 54� 
�	Id: Int � �������������, 4�
�	Name: String � ��� ����������, 50 * 1�
4)	��������� (E � ���������� �����������) 1154�
�	Id: Int � �������������, 4�
�	Name: String � �������� ����������, 50 * 1�
�	Email: String � ����� ����������, 25 * 1�
�	Degree: String � ������ ������� ����������, 50 * 1�
�	Area_of_interest: String � ������� ���������������� ���������, 500 * 1� 
�	Scientific_works: String � ������� ������, 500 * 1�
�	Position: String � ��������� �� �������, 25 * 1�
## 3.	������ ���������� ������
����������� � ���� ������ ��������� F �����������, K ������, D ��������� � E �����������. 
����� ������ ����� ����� �����: 54� * F + 54� * K + 54� * D + 1154� * E
����������� ����� �����: 58� * F + 54� * K + 54� * D + 1158� * E
������������ ������:
(58� * F + 54� * K + 54� * D + 1158� * E) / (54� * F + 54� * K + 54� * D + 1154� * E)
## 4.	������� ��������
//����� ���� ������ � ������� Employee
SELECT * FROM Employee 1 ������
//���������� ������ � ������� Employee
UPDATE Employee SET name = �MARK� where positon = �������' 1 ������
# ��������� MongoDB � Sql ������� ������
������� � mongodb ����� ������� � ������ � ����������, ������, ��� � sql. ��� �������� ���� ��������� ��������� ���������� ��������. ���� ��������, ��� ���������� �������� ��� sql ����� ������, ��� � mongodb, �� �� �� �������. ��� ������� � ���, ��� � mongodb ���������� ��������� ������ � ������� ������.
Mongodb ������� �������� ���������� ������, ������ mysql ��-�� ������������� �������� ������ �� id.
��� ������ ������ ������ �������� mysql, ��� ��� ���� ������������ ������������ � ���������� ������ � �������� ������.

