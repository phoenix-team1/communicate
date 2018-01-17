# automatically generated by the FlatBuffers compiler, do not modify

# namespace: syspack

import flatbuffers

class T_REG_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_REG_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_REG_RQ()
        x.Init(buf, n + offset)
        return x

    # T_REG_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_REG_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_REG_RQ
    def AccountInfo(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from .ACCOUNT_INFO import ACCOUNT_INFO
            obj = ACCOUNT_INFO()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

def T_REG_RQStart(builder): builder.StartObject(2)
def T_REG_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_REG_RQAddAccountInfo(builder, accountInfo): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(accountInfo), 0)
def T_REG_RQEnd(builder): return builder.EndObject()
