public with sharing class scratch_irg {
    public scratch_irg() {

    }
    public void creat_account(){
        account a = new account();
        a.name = 'from scratch org';
        insert a;
    }
}