export const require = (value)=>{
    return value !== undefined && value !== "";
}
export const Norequire = (value)=>{
    return (value === undefined || value === "") || (value !== undefined && value !== "");
}
export const max = (max)=>{
    return (value)=>value <= max;
}
export const equals = (input,compare)=>{
	if(input === compare){
		return (value)=>true;
	}else{
		return (value)=>true;
	}

}
export const min = (min)=>{
    return (value)=>value >= min;
}
export const textWithoutAccent = (value)=>{
    const reg = /^[\s a-z]*$/i;
    return reg.test(value);
}
export const textAndNumber = (value)=>{
    const reg = /^[\s\-. a-z 0-9]*$/i;
    return reg.test(value);
}
export const maxLenght = (max)=>{
    return (value)=>value.toString().length <= max;

}
export const textTypeNumber = (value)=>{
    const reg = /^[.\-/ 0-9]{0,15}$/i;
    return reg.test(value);
}
export const textTypePhoneNumber = (value)=>{
    const reg = /^[.\- ( ) 0-9]{0,18}$/i;
    return reg.test(value);
}
export const email = (email)=>{
	var re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const cpf =  function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf === '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length !== 11 || 
		cpf === "00000000000" || 
		cpf === "11111111111" || 
		cpf === "22222222222" || 
		cpf === "33333333333" || 
		cpf === "44444444444" || 
		cpf === "55555555555" || 
		cpf === "66666666666" || 
		cpf === "77777777777" || 
		cpf === "88888888888" || 
		cpf === "99999999999")
			return false;		
	// Valida 1o digito	
	let add = 0;	
	for (let i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		let rev = 11 - (add % 11);	
		if (rev === 10 || rev === 11)		
			rev = 0;	
		if (rev !== parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (let i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev === 10 || rev === 11)	
		rev = 0;	
	if (rev !== parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

export const contactHour = (contact)=>{
	const regContact = /^das [0-9]{2}:[0-9]{2} as [0-9]{2}:[0-9]{2}$/i;
	return regContact.test(contact);
}

export const cnpj = (s)=>{
	let cnpj = s.replace(/[^\d]+/g, '')
	// Valida a quantidade de caracteres
	if (cnpj.length !== 14)
		return false

	// Elimina inválidos com todos os caracteres iguais
	if (/^(\d)\1+$/.test(cnpj))
		return false

	// Cáculo de validação
	let t = cnpj.length - 2,
		d = cnpj.substring(t),
		d1 = parseInt(d.charAt(0)),
		d2 = parseInt(d.charAt(1)),
		calc = x => {
			let n = cnpj.substring(0, x),
				y = x - 7,
				s = 0,
				r = 0

				for (let i = x; i >= 1; i--) {
					s += n.charAt(x - i) * y--;
					if (y < 2)
						y = 9
				}

				r = 11 - s % 11
				return r > 9 ? 0 : r
		}

	return calc(t) === d1 && calc(t + 1) === d2
}