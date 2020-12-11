import "./formulario.css"
import MenuLateral from "../../components/menulateral/menu_lateral"

import React, { useState } from 'react';

import {
    TextField, FormControlLabel, Button, Container,
    InputLabel, Select, FormControl, FormLabel, Radio, RadioGroup
} from '@material-ui/core/';



function FormularioJob() {

    const [Job_Name, setJob_Name] = useState("")
    const [Job_Workstation, setJob_Workstation] = useState("")
    const [Jobstream, setJobstream] = useState("")
    const [Jobstream_Workstation, setJobstream_Workstation] = useState("")
    const [Impacto_negocio, setImpacto_negocio] = useState("")
    const [Descricao_Detalhada, setDescricao_Detalhada] = useState("")
    const [Sistema, setSistema] = useState("")
    //LINHA 119 ver após 
    const [Scheduler, setScheduler] = useState("")
    const [Calendario, setCalendario] = useState("")
    const [Horario_inicio, setHorario_inicio] = useState("")
    const [Periodicidade, setPeriodicidade] = useState("")
    const [Horario_Termino, setHorario_Termino] = useState("")
    const [Impacto, setImpacto] = useState("")
    const [Duracao_Estimada, setDuracao_Estimada] = useState("")
    const [Criticidade, setCriticidade] = useState("")
    const [Job_Predescessor, setJob_Predescessor] = useState("")
    const [Recurso, setRecurso] = useState("")
    const [Job_Sucessor, setJob_Sucessor] = useState("")
    const [Informacoes_Arquivo, setInformacoes_Arquivo] = useState("")
    const [Informacoes_Script, setInformacoes_Script] = useState("")
    const [Usuario_Sceduler, setUsuario_Sceduler] = useState("")
    const [Gerente_ResponsaveL, setGerente_Responsavel] = useState("")
    const [Empresa_responsavel, setEmpresa_responsavel] = useState("")
    const [STI_Responsavel, setSTI_Responsavel] = useState("")
    const [data_Implementacao, setdata_Implementacao] = useState("")
    const [JOB_SAP, setJOB_SAP] = useState("")
    const [JOB_ID, setJOB_ID] = useState("")
    const [Programa_Comando, setPrograma_Comando] = useState("")
    const [Usuario_SAP, setUsuario_SAP] = useState("")
    const [Diretorio_Adicionais, setDiretorio_Adicionais] = useState("")
    const [Idioma, setIdioma] = useState("")
    const [NOME_Um, setNOME_Um] = useState("")
    const [TELEFONE_Um, setTELEFONE_Um] = useState("")
    const [E_MAIL_Um, setE_MAIL_Um] = useState("")
    const [NOME_Dois, setNOME_Dois] = useState("")
    const [TELEFONE_Dois, setTELEFONE_Dois] = useState("")
    const [E_MAIL_Dois, setE_MAIL_Dois] = useState("")
    const [NOME_Tres, setNOME_Tres] = useState("")
    const [TELEFONE_Tres, setTELEFONE_Tres] = useState("")
    const [E_MAIL_Tres, setE_MAIL_Tres] = useState("")
    const [GERENTE, setGERENTE] = useState("")
    const [TELEFONE_Gerente, setTELEFONE_Gerente] = useState("")
    const [E_MAIL_Gerente, setE_MAIL_Gerente] = useState("")
    const [STI, setSTI] = useState("")
    const [TELEFONE_STI, setTELEFONE_STI] = useState("")
    const [EMAIL_STI, setEMAIL_STI] = useState("")
    const [Gerente_responsavel, setGereente_responsavel] = useState("")



    function gera_Dados(recebe) {
        var dados = [{
            Job_Name, Job_Workstation, Jobstream, Jobstream_Workstation, Impacto_negocio, Descricao_Detalhada, Sistema, Scheduler, Calendario,
            Horario_inicio, Periodicidade, Horario_Termino, Impacto, Duracao_Estimada, Criticidade, Job_Predescessor, Recurso, Job_Sucessor, Informacoes_Arquivo,
            Informacoes_Script, Usuario_Sceduler, Gerente_ResponsaveL, Empresa_responsavel, STI_Responsavel, data_Implementacao, JOB_SAP, JOB_ID, Programa_Comando,
            Usuario_SAP, Diretorio_Adicionais, Idioma, NOME_Um, TELEFONE_Um, E_MAIL_Um, NOME_Dois, TELEFONE_Dois, E_MAIL_Dois, NOME_Tres, TELEFONE_Tres, E_MAIL_Tres,
            GERENTE, TELEFONE_Gerente, E_MAIL_Gerente, STI, TELEFONE_STI, EMAIL_STI, Gerente_responsavel
        }]
        console.log(dados)
        // console.log(teste)
    }


    return (
        <>
            <MenuLateral />
            <div className="formularioCadastro_div">

                <Container component="article" >

                    <section className="formularioCadastro_section">

                        <h2>Formulário para solicitação de JOB</h2>
                        <hr />
                        <form className="formularioCadastro_form"
                            onSubmit={(recebe) => {
                                recebe.preventDefault()
                                gera_Dados()
                            }}
                        >
                            <TextField style={{ marginLeft: '20px', width: '45%' }}


                                onBlur={(recebe) => { setJob_Name(recebe.target.value) }}

                                id="Job_Name"
                                label="Job Name"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"

                            // fullWidth
                            />
                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setJob_Workstation(recebe.target.value) }}

                                id="Job_Workstation"
                                label="Job Workstation"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                            // fullWidth
                            />
                            <TextField style={{ marginLeft: '20px', width: '45%' }}

                                onBlur={(recebe) => { setJobstream(recebe.target.value) }}

                                id="Jobstream "
                                label="Jobstream "
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"

                            />
                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setJobstream_Workstation(recebe.target.value) }}
                                id="Jobstream_Workstation"
                                label="Jobstream Workstation"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline

                            />

                            <TextField style={{ marginLeft: '20px', width: '65%' }}
                                onBlur={(recebe) => { setImpacto_negocio(recebe.target.value) }}
                                id="Impacto_negocio"
                                label="Impacto no negócio"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline


                            />

                            <TextField style={{ marginLeft: '20px', width: '65%' }}
                                onBlur={(recebe) => { setDescricao_Detalhada(recebe.target.value) }}
                                id="Descricao_Detalhada"
                                label="Descrição Detalhada"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '65%' }}
                                onBlur={(recebe) => { setSistema(recebe.target.value) }}
                                id="Sistema"
                                label="Sistema"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <FormControl style={{ marginLeft: '20px', width: '25%' }}>
                                <InputLabel htmlFor="age-native-simple">Scheduler</InputLabel>
                                <Select
                                    native
                                    value={Scheduler} onChange={(recebe) => { setScheduler(recebe.target.value) }}
                                >
                                    <option aria-label="None" value="" />
                                    <option >ITEM 1</option>
                                    <option >ITEM 2</option>
                                    <option >ITEM 3</option>
                                </Select>
                            </FormControl>

                            <hr />
                            <div className="formularioCadastro_div_h3">
                                <h3>SCHEDULAGEM</h3>
                            </div>

                            {/* <TextField style={{ marginLeft: '20px', width: '45%' }}
                            onBlur={(recebe) => { setCalendario(recebe.target.value) }}

                            id="Calendario"
                            label="Calendario"
                            variant="outlined"
                            className="FormularioCadastro_inputs"
                            margin="dense"
                            multiline
                        /> */}
                            <form className="classes.container" noValidate style={{ marginLeft: '20px', width: '45%', display: "inline-block" }}>
                                <TextField
                                    onBlur={(recebe) => { setCalendario(recebe.target.value) }}
                                    id="date"
                                    label="Calendário"
                                    type="date"
                                    defaultValue="24-05-2020"
                                    className="classes.container"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>


                            <form className="classes.container" noValidate style={{ marginLeft: '20px', width: '45%', display: "inline-block" }}>
                                <TextField
                                    onBlur={(recebe) => { setHorario_inicio(recebe.target.value) }}
                                    id="Horario_inicio"
                                    label="Hora inicio"
                                    type="time"
                                    defaultValue="00:00"
                                    className="classes.textField"

                                    InputLabelProps={{
                                        shrink: true,
                                    }}

                                />
                            </form>

                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setPeriodicidade(recebe.target.value) }}
                                id="Periodicidade"
                                label="Periodicidade"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />


                            <form className="classes.container" noValidate style={{ marginLeft: '20px', width: '45%', display: "inline-block", marginTop: "5px" }}>
                                <TextField
                                    onBlur={(recebe) => { setHorario_Termino(recebe.target.value) }}
                                    id="Horario_Termino"
                                    label="Hora Termino"
                                    type="time"
                                    defaultValue="00:00"
                                    className="classes.textField"

                                    InputLabelProps={{
                                        shrink: true,
                                    }}

                                />
                            </form>

                            <FormControl component="fieldset" margin="dense" style={{ marginLeft: '20px', width: '45%' }}>
                                <FormLabel component="legend">Impacto:</FormLabel>
                                <RadioGroup row aria-label="gender" name="gender1" value={Impacto} onChange={(recebe) => { setImpacto(recebe.target.value) }} >
                                    <FormControlLabel value="Baixissimo" control={<Radio />} label="Baixissimo" />
                                    <FormControlLabel value="Baixo" control={<Radio />} label="Baixo" />
                                    <FormControlLabel value="Medio" control={<Radio />} label="Medio" />
                                    <FormControlLabel value="Alto" control={<Radio />} label="Alto" />

                                </RadioGroup>
                            </FormControl>

                            <TextField style={{ marginLeft: '20px', width: '45%', marginTop: "15px" }}
                                onBlur={(recebe) => { setDuracao_Estimada(recebe.target.value) }}
                                id="Duracao_Estimada"
                                label="Duraçao estimada"
                                variant="outlined"
                                className="FormularioCadastro_inputs"

                            />



                            <FormControl component="fieldset" margin="dense" style={{ marginLeft: '20px', width: '45%' }}>
                                <FormLabel component="legend">Criticidade:</FormLabel>
                                <RadioGroup row aria-label="gender" name="gender1" value={Criticidade} onChange={(recebe) => { setCriticidade(recebe.target.value) }} >
                                    <FormControlLabel value="Baixissimo" control={<Radio />} label="Baixissimo" />
                                    <FormControlLabel value="Baixo" control={<Radio />} label="Baixo" />
                                    <FormControlLabel value="Medio" control={<Radio />} label="Medio" />
                                    <FormControlLabel value="Alto" control={<Radio />} label="Alto" />

                                </RadioGroup>
                            </FormControl>

                            <hr />

                            <div className="formularioCadastro_div_h3">
                                <h3>RESTRIÇÕES E PARAMETROS</h3>
                            </div>

                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setJob_Predescessor(recebe.target.value) }}
                                id="Job_Predescessor"
                                label="Job Predescessor"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setRecurso(recebe.target.value) }}
                                id="Recurso"
                                label="Recurso"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setJob_Sucessor(recebe.target.value) }}
                                id="Job_Sucessor"
                                label="Job Sucessor"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setInformacoes_Arquivo(recebe.target.value) }}
                                id="Informacoes_Arquivo"
                                label="Informações de Arquivo"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setInformacoes_Script(recebe.target.value) }}
                                id="Informacoes_Script"
                                label="Informaçoes do Script"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setUsuario_Sceduler(recebe.target.value) }}
                                id="Usuario_Scheduler"
                                label="Usuario Scheduler"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />


                            <div className="formularioCadastro_div_h3">
                                <h3>PROPRIEDADES</h3>
                            </div>

                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setGerente_Responsavel(recebe.target.value) }}
                                id="Gerente_Responsavel"
                                label="Gerente Responsavel"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setEmpresa_responsavel(recebe.target.value) }}
                                id="Empresa_responsavel"
                                label="Empresa responsavel"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setSTI_Responsavel(recebe.target.value) }}
                                id="STI_Responsavel"
                                label="STI Responsavel"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setdata_Implementacao(recebe.target.value) }}
                                id="data_Implementacao"
                                label="data de Implementaçao"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <hr />

                            <div className="formularioCadastro_div_h3">
                                <h3>RESTRIÇÕES E PARAMETROS</h3>
                            </div>


                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setJOB_SAP(recebe.target.value) }}
                                id="JOB_SAP"
                                label="JOB SAP"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setJOB_ID(recebe.target.value) }}
                                id="JOB_ID"
                                label="JOB ID"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setPrograma_Comando(recebe.target.value) }}
                                id="Programa_Comando"
                                label="Programa / Comando"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setUsuario_SAP(recebe.target.value) }}
                                id="Usuario_SAP"
                                label="Usuario SAP"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setDiretorio_Adicionais(recebe.target.value) }}
                                id="Diretorio_Adicionais"
                                label="Diretorio / Arquivo / Informaçoes adicionais"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '45%' }}
                                onBlur={(recebe) => { setIdioma(recebe.target.value) }}
                                id="Idioma"
                                label="Idioma"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <hr />

                            <div className="contatos">
                                <p className="paragrafo">Nome</p>
                                <p className="paragrafo">Telefone</p>
                                <p className="paragrafo">Email</p>
                            </div>

                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setNOME_Um(recebe.target.value) }}
                                id="NOME_Um"
                                label="NOME 1"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setTELEFONE_Um(recebe.target.value) }}
                                id="TELEFONE_Um"
                                label="TELEFONE1"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setE_MAIL_Um(recebe.target.value) }}
                                id="E_MAIL_Um"
                                label="E-MAIL 1"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setNOME_Dois(recebe.target.value) }}
                                id="NOME_Dois"
                                label="NOME 2"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setTELEFONE_Dois(recebe.target.value) }}
                                id="TELEFONE_Dois"
                                label="TELEFONE 2"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setE_MAIL_Dois(recebe.target.value) }}
                                id="E_MAIL_Dois"
                                label="E-MAIL 2"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setNOME_Tres(recebe.target.value) }}
                                id="NOME_Tres"
                                label="NOME 3"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setTELEFONE_Tres(recebe.target.value) }}
                                id="TELEFONE_Tres"
                                label="TELEFONE 3"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setE_MAIL_Tres(recebe.target.value) }}
                                id="E_MAIL_Tres"
                                label="E-MAIL 3"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setGERENTE(recebe.target.value) }}
                                id="GERENTE"
                                label="GERENTE"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setTELEFONE_Gerente(recebe.target.value) }}
                                id="TELEFONE_Gerente"
                                label="TELEFONE"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setE_MAIL_Gerente(recebe.target.value) }}
                                id="E_MAIL_Gerente"
                                label="E-MAIL"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />
                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setSTI(recebe.target.value) }}
                                id="STI"
                                label="STI"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setTELEFONE_STI(recebe.target.value) }}
                                id="TELEFONE_STI"
                                label="TELEFONE"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginLeft: '20px', width: '30%' }}
                                onBlur={(recebe) => { setEMAIL_STI(recebe.target.value) }}
                                id="EMAIL_STI"
                                label="EMAIL"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                            />

                            <TextField style={{ marginTop: '27px' }}
                                onBlur={(recebe) => { setGereente_responsavel(recebe.target.value) }}
                                id="Gerente_responsavel"
                                label="Gerente  UOL Responsavel e Aprovador (uso interno):"
                                variant="outlined"
                                className="FormularioCadastro_inputs"
                                margin="dense"
                                multiline
                                fullWidth
                            />

                            <Button style={{ marginTop: "25px" }}
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >Cadastrar</Button>


                        </form>

                    </section>
                </Container>
            </div >
        </>




    )
}

export default FormularioJob