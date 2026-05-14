SELECT setval('group_members_id_seq', COALESCE((SELECT MAX(id) + 1 FROM group_members), 1), false);
SELECT setval('groups_id_seq', COALESCE((SELECT MAX(id) + 1 FROM groups), 1), false);
SELECT setval('transaction_members_id_seq', COALESCE((SELECT MAX(id) + 1 FROM transaction_members), 1), false);
SELECT setval('transactions_id_seq', COALESCE((SELECT MAX(id) + 1 FROM transactions), 1), false);
SELECT setval('users_id_seq', COALESCE((SELECT MAX(id) + 1 FROM users), 1), false);