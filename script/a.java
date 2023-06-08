public class TestVehicle {
    public static void main(String[] args) {
        Vehicle v= new Vehicle("Thar" , 400);
        System.out.println(v.travels());
        System.out.println(v.toString());
        System.out.println(v.getTankCapacity());
        System.out.println(v.getModelName());

        Vehicle b = new Bike("Bullet",100,3000);
        System.out.println(b.travels());
        System.out.println(b.toString());


        Vehicle a= new Aircraft("Emirates", 4000,"Rubber");
        System.out.println(a.toString());
        System.out.println(a.travels());
    }
}
