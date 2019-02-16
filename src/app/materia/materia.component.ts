import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
})
export class MateriaComponent implements OnInit {

  descMateria: string;
  materialCampo: any[] = [];
  formulario: FormGroup;
  materiaBiologia: { data: any; texto: any; }[];
  materiaGeografia: { data: any; texto: any; }[];
  materiaHistoria: { data: any; texto: any; }[];
  materiaIngles: { data: any; texto: any; }[];
  materiaMatematica: { data: any; texto: any; }[];
  materiaFisica: { data: any; texto: any; }[];

  constructor(
    private readonly router: ActivatedRoute,
    private readonly fb: FormBuilder,
    private route: Router
  ) {
    this.router.params.subscribe(res => this.descMateria = res.descMateria);
  }
  ngOnInit() {
    this.iniciarFormulario();
    if (this.descMateria) {
      this.buscarDados();
    }
  }

  iniciarFormulario() {
    this.formulario = this.fb.group({
      DescMateria: [''],
      Data: ['']
    });
  }

  buscarDados() {
    if (this.descMateria === 'biologia' && this.materiaBiologia === undefined ) {
      console.log('nao era pra entrar', this.materiaBiologia);
      this.materialCampo = [
        // tslint:disable-next-line:max-line-length
        { data: '14/02/2019', texto: 'Zoologia é a ciência que estuda a vida animal. O estudo dos animais analisa as diferentes características, estruturas, forma do corpo, desenvolvimento, crescimento, reprodução, locomoção, e sistemas (digestório, respiratório, circulatório, excretor, nervoso e etc.), além da ecologia (interação do organismo com o meio) e evolução (surgimento e desaparecimento ou resquício de alguma estrutura ou característica).' }
      ];
      this.formulario.get('DescMateria').setValue(this.materialCampo[0].texto);
      this.formulario.get('Data').setValue(this.materialCampo[0].data);
    }
    if (this.descMateria === 'geografia' && !this.materiaGeografia) {
      this.materialCampo = [
        // tslint:disable-next-line:max-line-length
        { data: '20/02/2019', texto: 'Geografia é a ciência que estuda as relações sociais estabelecidas no espaço geográfico, ou seja, as relações entre a sociedade e o meio. Esse espaço é transformado pelo homem e está, por isso, em constante modificação. Contudo, é difícil limitar o que é estudado pela Geografia ou não, visto que essa é uma ciência horizontal, ou seja, seu campo de estudo é amplo e relaciona-se com outras ciências, transcendendo seu próprio saber.' }
      ];
      this.formulario.get('DescMateria').setValue(this.materialCampo[0].texto);
      this.formulario.get('Data').setValue(this.materialCampo[0].data);
    } if (this.descMateria === 'historia' && !this.materiaHistoria) {
      this.materialCampo = [
        // tslint:disable-next-line:max-line-length
        { data: '22/02/2019', texto: 'Durante esse período não existiu realmente um mecanismo de governo unitário nas diversas entidades políticas, embora tenha ocorrido a formação dos reinos. O desenvolvimento político e econômico era fundamentalmente local, e o comércio regular desapareceu quase totalmente. Com o fim de um processo iniciado durante o Império Romano, os camponeses começaram seu processo de ligação com a terra e de dependência dos grandes proprietários para obter proteção. Essa situação constituiu a semente do regime senhorial. Os principais vínculos entre a aristocracia guerreira foram os laços de parentesco, embora também tenham começado a surgir as relações feudais. Durante a Idade Média européia, os camponeses passaram, obrigatoriamente, a viver e trabalhar em um único lugar a serviço dos nobres latifundiários. Esses trabalhadores chamados servos que cuidavam das terras de seu dono, a quem chamavam de senhor, recebiam em troca uma humilde moradia, um pequeno terreno adjacente, alguns animais de granja e proteção ante os foragidos e os demais senhores. Os servos deviam entregar parte de sua própria colheita como pagamento e estavam sujeitos a muitas outras obrigações e impostos.' }
      ];
      this.formulario.get('DescMateria').setValue(this.materialCampo[0].texto);
      this.formulario.get('Data').setValue(this.materialCampo[0].data);
    } if (this.descMateria === 'ingles' && !this.materiaIngles) {
      this.materialCampo = [
        // tslint:disable-next-line:max-line-length
        { data: '12/02/2019', texto: 'In ancient Rome, there was the habit of celebrating the birthday of a person. There weren’t parties like we know today, but cakes were prepared and offers were made. Then, the habits of wishing happy birthday, giving gifts and lighting candles became popular as a way to protect the birthday person from devils and ensure good things to the next year in the person’s life. The celebrations only became popular like we know today after fourteen centuries, in a collective festival performed in Germany.' }
      ];
      this.formulario.get('DescMateria').setValue(this.materialCampo[0].texto);
      this.formulario.get('Data').setValue(this.materialCampo[0].data);
    } if (this.descMateria === 'matematica' && !this.materiaMatematica) {
      this.materialCampo = [
        // tslint:disable-next-line:max-line-length
        { data: '14/02/2019', texto: 'A Matemática está presente em diversas situações, se olharmos ao nosso redor podemos notar sua presença nos contornos, nas formas dos objetos, nas medidas de comprimento, na escola, em casa, no lazer e nas brincadeiras. Seu desenvolvimento está ligado à pesquisa, ao argumento, ao interesse por descobrir o novo, investigar situações, é a ciência do raciocínio lógico.' }
      ];
      this.formulario.get('DescMateria').setValue(this.materialCampo[0].texto);
      this.formulario.get('Data').setValue(this.materialCampo[0].data);
    }
    if (this.descMateria === 'fisica' && !this.materiaFisica) {
      this.materialCampo = [
        // tslint:disable-next-line:max-line-length
        { data: '10/02/2019', texto: 'A Física é a ciência das propriedades da matéria e das forças naturais. Ela estuda a matéria nos níveis molecular, atômico, nuclear e subnuclear. Estuda os níveis de organização, ou seja, os estados sólido, líquido, gasoso e plasmático da matéria. Pesquisa também as quatro forças fundamentais: a gravidade (força de atração exercida por todas as moléculas do Universo), a eletromagnética (que liga os elétrons aos núcleos), a interação forte (que mantém a coesão do núcleo) e a interação fraca (responsável pela desintegração de certas partículas).' }
      ];
      this.formulario.get('DescMateria').setValue(this.materialCampo[0].texto);
      this.formulario.get('Data').setValue(this.materialCampo[0].data);
    }

    if (this.descMateria === 'biologia' && this.materiaBiologia) {
      this.formulario.get('DescMateria').setValue(this.materiaBiologia[0].texto);
      this.formulario.get('Data').setValue(this.materiaBiologia[0].data);
    }
    if (this.descMateria === 'geografia' && this.materiaGeografia) {
      this.formulario.get('DescMateria').setValue(this.materiaGeografia[0].texto);
      this.formulario.get('Data').setValue(this.materiaGeografia[0].data);
    }
    if (this.descMateria === 'historia' && this.materiaHistoria) {
      this.formulario.get('DescMateria').setValue(this.materiaHistoria[0].texto);
      this.formulario.get('Data').setValue(this.materiaHistoria[0].data);
    }
    if (this.descMateria === 'ingles' && this.materiaIngles) {
      this.formulario.get('DescMateria').setValue(this.materiaIngles[0].texto);
      this.formulario.get('Data').setValue(this.materiaIngles[0].data);
    }
    if (this.descMateria === 'matematica' && this.materiaMatematica) {
      this.formulario.get('DescMateria').setValue(this.materiaMatematica[0].texto);
      this.formulario.get('Data').setValue(this.materiaMatematica[0].data);
    }
    if (this.descMateria === 'fisica' && this.materiaFisica) {
      this.formulario.get('DescMateria').setValue(this.materiaFisica[0].texto);
      this.formulario.get('Data').setValue(this.materiaFisica[0].data);
    }

  }

  voltar() {
    this.mudarDados();
    this.route.navigate(['home']);
  }

  mudarDados() {
    const descMateria = this.formulario.get('DescMateria').value;
    const data = this.formulario.get('Data').value;
    if (this.descMateria === 'biologia') {
      this.materiaBiologia = [
        { data: data, texto: descMateria }
      ];
      console.log(this.materiaBiologia);
    }
    if (this.descMateria === 'geografia') {
      this.materiaGeografia = [
        { data: data, texto: descMateria }
      ];
    } if (this.descMateria === 'historia') {
      this.materiaHistoria = [
        { data: data, texto: descMateria }
      ];
    } if (this.descMateria === 'ingles') {
      this.materiaIngles = [
        { data: data, texto: descMateria }
      ];
    } if (this.descMateria === 'matematica') {
      this.materiaMatematica = [
        { data: data, texto: descMateria }
      ];
    }
    if (this.descMateria === 'fisica') {
      this.materiaFisica = [
        { data: data, texto: descMateria }
      ];
    }
  }
}
