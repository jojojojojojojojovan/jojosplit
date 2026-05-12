# User Stories

## In main tab

### Create group

#### US 1a (2P)

As a user, I want to be able to create a group and add group members upon creation so that I can keep track of the group's expense.
POST/groups/create
{groupname:
created at:
groupmember:[]}

#### US 1b (1P)

As a user, I want to be able to view and enter all the groups I am currently in so that I can ...
GET/groups/{userid}

## In group management page

#### US 2a (1P)

As a user, I want to be able to view all members of an existing groups so that I know who is part of the group.
/GET/groupmembers/{groupid}

#### US 2b (2P)

As a user, I want to be able to add and remove members from existing groups so that the members in the group are correctly reflected.
/PUT/groupmembers/{groupid}
{groupmember: []}

- Get before list & compare to after list
- Add group members
- Delete group members


## In group expenses page (Main)
#### US 3a (5P)

As a user, I want to be able to add expenses to the group so that expenses spent in the group can be consolidated.

- Can set manually / %
- Can set how much each member spent
- Can set how much each member paid
- Can set GST/Tax
  /POST/transaction/{groupid}
  {transaction_name: ,
   transactionmember: [{member:,
                        amount:},
                        .
                        .
                        .
                        .]
  }

  - Add to transactionmember table
  - Add to transaction table

#### US 3b (2P)
As a user, I want to see transactions within a group
/GET/transaction/{groupid}

#### US 3c (2P)

As a user, I want to see transactions within a group that involves me
/GET/transaction/{groupid}/{userid}

- Separate tabs/filters to show transactions which I have paid or borrowed



#### US 3d (3P)
As a user, I want see how much I have paid and borrowed
/GET/transaction/{groupid}{userid}

#### US 3e (4P)
As a user, I want see how much each party should pay and to whom (Simplified payment)
/GET/transaction/{groupid}
- ALOT OF backend logic

#### US 3f (1P)
Aa a user, I want to be able to settle amount that I owe
  /POST/transaction/{groupid}
  {transaction_name: ,
   transactionmember: [{member:,
                        amount:},
                        .
                        .
                        .
                        .]
  }

