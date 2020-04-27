class Procesor
{
    
    constructor (id,name,speed,OCT)
    {
        this.id = id;
        this.name = name;
        this.speed = speed;
        this.OCT = OCT;
        this.overclocked=false;
        this.burned = false;
    }

    calculateValues (averageSpeed)
    {

        this.COC =   (averageSpeed * 100)/this.speed;
        
        if (this.COC>100)
        {
            this.overclocked = true;
            if (this.COC>(100+this.OCT))
            {

                this.burned = true;
                this.currentSpeed = 0;
            } else 
            {
                this.currentSpeed = (this.COC*this.speed)/100
            }
        }  else 
        {
            this.currentSpeed = averageSpeed;
        }
    }

}