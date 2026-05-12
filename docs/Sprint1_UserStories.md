# User Stories

## In main tab

### Create group

#### US 1a (2P)

As a group owner, I want to be able to create a group and add group members upon creation so that I can keep track of the group's expense.
POST/groups/create
{groupname:
created at:
groupmember:\[]}

#### US 1b (1P)

As a user, I want to be able to view all groups and enter into the group page so that I know which group I am in and see my expenses in that group
GET/groups/{userid}

## In group management page

#### US 2a (3P)

As a user, I want to be able to manage an existing group so that I know who is part of the group and add/remove members
/GET/groupmembers/{groupid}
/PUT/groupmembers/{groupid}
{groupmember: \[]}

* Get before list \& compare to after list
* Add group members
* Delete group members



## In group expenses page (Main)

#### US 3a (5P)

As a user, I want to be able to add expenses to the group so that expenses spent in the group can be consolidated.

* Can set manually / %
* Can set how much each member spent
* Can set how much each member paid
* Can set GST/Tax
/POST/transaction/{groupid}
{transaction\_name: ,
transactionmember: \[{member:,
amount:},
.
.
.
.]
}

  * Add to transactionmember table
  * Add to transaction table

#### US 3b (7P)

As a user, I want to filter and see the transactions made within a group so that I can choose to see how much I paid, borrowed, who I owe/who owes me and all transactions within the group
/GET/transaction/{groupid}
/GET/transaction/{groupid}/{userid}

* Separate tabs/filters to show transactions which I have paid or borrowed

#### US 3c (4P)

As a user, I want see how much each party should pay and to whom (Simplified payment)
/GET/transaction/{groupid}

* ALOT OF backend logic

#### US 3d (1P)

As a user, I want to be able to settle amount that I owe
/POST/transaction/{groupid}
{transaction\_name: ,
transactionmember: \[{member:,
amount:},
.
.
.
.]
}

